🚨 Website deployment on Render may have issues due to Tesseract's exe file. To test the website locally, download the source code and follow the instructions in the README for a seamless experience.

Thai ID OCR App:-
This project is a Node.js web application designed for optical character recognition (OCR), utilizing the Tesseract OCR engine. It facilitates the extraction of information from images, particularly focusing on identification documents. The extracted data is then processed and stored in a MongoDB database.

![image](https://github.com/Kartikahuja72/Thai_ID_OCR_App/assets/121183525/39bdbf0e-15b4-444b-a1f9-b18029c850fe)
![image](https://github.com/Kartikahuja72/Thai_ID_OCR_App/assets/121183525/e16afc39-e46d-4c52-82d3-333d0e03167b)




Make sure that you have following installed in your machine:-
- [Node.js] https://nodejs.org/
- [Tesseract OCR]   https://github.com/UB-Mannheim/tesseract/wiki
Note:-tesseract should be in correct directory in your machine

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Kartikahuja72/Thai_ID_OCR_App

1.	Navigate to the project directory:
cd your-project

2.	Install All the dependencies:
(eg- multer which I use in my project for extracting the file)


Configuration:-

1.	Set up your MongoDB connection:-

•	Open model/Data.js and replace the database_link variable with your MongoDB Atlas link.
2.	Configure Tesseract OCR:-

•	Follow the Tesseract OCR installation guide for your operating system.

Run the App:-
1.Start the Application


node index.js
![image](https://github.com/Kartikahuja72/Thai_ID_OCR_App/assets/121183525/2e00a265-ed78-4a9a-b5f5-a7ad14812c20)



This will start the server at http://localhost:5000.
Open your web browser and go to http://localhost:5000.

![image](https://github.com/Kartikahuja72/Thai_ID_OCR_App/assets/121183525/2d1f97cd-c9e0-4d5f-af56-4839f627143c)



Usage:
1.	Upload an Image:
•	Navigate to the home page and use the provided interface to upload an image containing identification document details.
2.	View Extracted Information:
•	Upon successful image processing, the extracted information will be displayed on the page. Check for details such as the identification number, name, last name, date of birth, date of issue, and date of expiry.
3.	Scroll for Operation Summary:
•	Scroll down the page to access a summary section that provides information on the total number of successful and unsuccessful CRUD operations performed. This section is updated dynamically as you interact with the application.
4.	API Endpoints:
•	Utilize the provided API endpoints for CRUD operations:
•	Create or Update Data: Make a POST request to /createOrUpdate with the extracted information.
•	Read Data: Make a GET request to /read/:identificationNumber to retrieve data based on the identification number.
•	Update Data: Make a PUT request to /update/:identificationNumber with updated information.
•	Delete Data: Make a DELETE request to /delete/:identificationNumber to remove data based on the identification number.

We get the Following result after the app starts:-
Let suppose the following is the id card through which we want to extract details:-
![image](https://github.com/Kartikahuja72/Thai_ID_OCR_App/assets/121183525/2bc50228-0aa2-4937-928d-ca235687869e)


After selecting the jpg or png file when we click on the Extract text from Image button we get:-
The followings are the details which is extracted from ID card
![image](https://github.com/Kartikahuja72/Thai_ID_OCR_App/assets/121183525/1c74cb3b-2b1e-48fe-85d2-e72f84e33e69)


And when we scroll a little bit we get the total successful and failed OCR Operatiions:-
 ![image](https://github.com/Kartikahuja72/Thai_ID_OCR_App/assets/121183525/66d8264a-eff3-4a92-8478-4891c6401468)



And as this Data is Stored in Database:-
![image](https://github.com/Kartikahuja72/Thai_ID_OCR_App/assets/121183525/96d6483d-fcef-48b5-8474-7834135547e2)

The following are the result which is tested on console:
 
![image](https://github.com/Kartikahuja72/Thai_ID_OCR_App/assets/121183525/b78c7e2d-dd9f-41db-a1a1-b5fd15cd22b0)





Project Files:-
In view folder there is Index.ejs file which is main frontend file:-
![image](https://github.com/Kartikahuja72/Thai_ID_OCR_App/assets/121183525/560998ec-bf2f-42b5-b793-918ee19a6421)


                                              


Index.js is the main node.js file in which my project backend is there:-
Package.json and package-lock.json are the files which contain all the dependencies and sub-dependencies:-
                            ![image](https://github.com/Kartikahuja72/Thai_ID_OCR_App/assets/121183525/81cb8de4-1732-46e1-859c-eed79756a65d)

                       
In Routes folder there is file Data which contain the Schema of My database:-
                            ![image](https://github.com/Kartikahuja72/Thai_ID_OCR_App/assets/121183525/bddd8454-1d86-4d75-93a1-d8e26c50d633)

                   
In Controller folder there is file crud.js in that there is implementation of all the crud operation is present:-
                           ![image](https://github.com/Kartikahuja72/Thai_ID_OCR_App/assets/121183525/42beb3dc-16a4-4da3-b751-e463377360ee)

                      

All the png,jpg file which we upload is stored in the upload folder


