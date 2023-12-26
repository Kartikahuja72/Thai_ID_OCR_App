const express=require('express')

const {createOrUpdateInDatabase,readData,deleteData} = require('./controller/crud');

const multer=require('multer')

const tesseract = require("node-tesseract-ocr")

const path=require('path')

const app=express()

app.use(express.static(path.join(__dirname + '/uploads')))
//we are making folders as static

app.set('view engine',"ejs")

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
//set the storage for multer 

const upload=multer({storage:storage})


app.get('/',(req,res)=>{
    res.render('index',{data:''})
})

//check date:
function check(tt){
    let c=tt.length;
    console.log(c);
    let l=tt.substr(0,2);
    let y=tt.substr(3,3);
    let z;
    if(c-8!=4){
        return false;
    }
    if(l>31||l<=0){
        return false;
    }
    // if(z.length=4){
    //     return false;
    // }
    return true;
}
//extract

function ReverseString(str) {
    return str.split('').reverse().join('')
}
 
function extractInformation(text) {
    const result = {};
    const booleanArray = [false, false,false, false,false,false];
    let i=0;
    let a=text.substr(i,6);
    while(a!="Number"){
        i++;
        a=text.substr(i,6);
    }
    while(text[i]!=' '){
        i++;
    }
    i++;
    let b="";
    while(b.length<17){
        b+=text[i];
        i++;
    }
    result.IdentificationNumber=b;
    booleanArray[0]=true;
let k= text.substr(i, 4);
while (k!="Name") {
  i++;
  k= text.substr(i, 4);
}
while(text[i]!=' '){
    i++;
}
i++
let text1="";
while(text[i]!='L'){
    text1+=text[i];
    i++
}
result.Name=text1;
booleanArray[1]=true;
let f= text.substr(i, 8);
while(f!="Lastname"){
    i++;
    f= text.substr(i, 8);
}
while(text[i]!=' '){
i++;
}
i++;
let text2="";
while(text[i]+text[i+1]!="ie"){
    text2+=text[i];
    i++;
}
result.LastName =text2;
booleanArray[2]=true;
let g=text.substr(i,5);
while(g!="Birth"){
    i++;
    g=text.substr(i,5);
}
while(text[i]!=' '){
    i++;
}
i++;
let count1=0;
let text4="";
while(count1<3){
    if(text[i]==' '){
        count1++;
    }
    if(text[i]=='m'){
        break;
    }
    if(count1==3){
        break;
    }
    text4+=text[i];
    i++;
}
if(check(text4)){
    booleanArray[3]=true;
}
result.DateOfBirth=text4;
let z=text.substr(i, 9);
while(z!="Juaeniins"){
    i++;
    z=text.substr(i, 9);
}
while(text[i]!='2'){
    i++;
}
let text5="";
let count3=0;
while(count3<2){
    if(text[i]==' '){
        count3++;
    }
    if(count3==2){
        break;
    }
    text5+=text[i];
    i++;
}
i++;
let j=0;
let text6=""
while(j<text5.length){
    if(text5[j]=='S'){
       text6+='J' ;
    }
    else{
        text6+=text5[j];
    }
    j++;
}
if(check(text6)){
    booleanArray[4]=true;
}
 result.DateOfIssue=text6;
 let text8=text.substr(i,2);
 while(text8!="of"){
     i++;
     text8=text.substr(i,2);
 }
 i-=5;
 let count8=0;
 let text9="";
 while(count8<3){
     if(text[i]==' '){
         count8++;
     }
     if(count8==3){
         break;
     }
     text9+=text[i];
     i--;
 }
 let text10=ReverseString(text9);
 if(check(text9)){
    booleanArray[5]=true;
}
 result.DateOfExpiry=text10;
 let ss=[];
 let sss=[];
 const big=["IdentificationNumber","Name","LastName","DateOfBirth","DateOfIssue","DateOfExpiry"];
 for(let i=0;i<6;i++){
if(booleanArray[i]==true){
    ss.push(big[i]);
}
else{
    sss.push(big[i]);
}
 }
 result.kk=ss;
 result.kkk=sss;
     return result;
}


 app.post('/extracttextfromimage',upload.single('file'), async (req,res)=>{
    console.log(req.file.path)

    const config = {
        lang: "eng",
        oem: 1,
        psm: 3,
      }
      
      tesseract
        .recognize(req.file.path, config)
        .then((text) => {
        const extractedInfo = extractInformation(text);
        console.log(extractedInfo);
        res.render('index',{data:extractedInfo})
        return createOrUpdateInDatabase(extractedInfo);
        })
        .then((result)=>{
            res.json({ success: true, data: result });
        })
        .catch((error) => {
          console.log(error.message)
        })

})


// app.post('/createOrUpdate', async (req, res) => {
//     console.log(req);
//     try {
//         const text = req.body.text; 
//         console.log(text);
//         const extractedInfo = extractInformation(text); // Assuming extractInformation is a function that extracts data from text
//         const result = await createOrUpdateInDatabase(extractedInfo);
//         res.json({ success: true, data: result });
//     } catch (error) {
//         res.status(500).json({ success: false, error: error.message });
//     }
// });



app.get('/read/:identificationNumber', async (req, res) => {
    try {
        const identificationNumber = req.params.identificationNumber;
        const result = await controller.readData(identificationNumber);
        res.json({ success: true, data: result });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

app.put('/update/:identificationNumber', async (req, res) => {
    try {
        const identificationNumber = req.params.identificationNumber;
        const text = req.body.text;
        const extractedInfo = controller.extractInformation(text);
        const result = await controller.createOrUpdateInDatabase({ ...extractedInfo, IdentificationNumber: identificationNumber });
        res.json({ success: true, data: result });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

app.delete('/delete/:identificationNumber', async (req, res) => {
    try {
        const identificationNumber = req.params.identificationNumber;
        const result = await controller.deleteData(identificationNumber);
        res.json({ success: true, data: result });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(5000,()=>{
    console.log("App os listening on port 5000")
})


