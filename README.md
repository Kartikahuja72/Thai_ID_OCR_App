Thai ID OCR App:-
This project is a Node.js web application designed for optical character recognition (OCR), utilizing the Tesseract OCR engine. It facilitates the extraction of information from images, particularly focusing on identification documents. The extracted data is then processed and stored in a MongoDB database.
 
 
![image](https://github.com/Kartikahuja72/Thai_ID_OCR_App/assets/121183525/996f1440-abfa-45dc-b4c3-e642bdd74fe4)
![image](https://github.com/Kartikahuja72/Thai_ID_OCR_App/assets/121183525/c3b5f6f6-e6ef-47b8-9146-00cd4fe585ad)



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
 ![image](https://github.com/Kartikahuja72/Thai_ID_OCR_App/assets/121183525/24c8346b-eb53-429b-a934-54ada1919f86)


This will start the server at http://localhost:5000.
Open your web browser and go to http://localhost:5000.

 ![image](https://github.com/Kartikahuja72/Thai_ID_OCR_App/assets/121183525/12f817da-c0db-4c12-86c4-49818282f897)


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
 ![image](https://github.com/Kartikahuja72/Thai_ID_OCR_App/assets/121183525/bf162b9b-b3b6-4441-8195-388409a4547d)

After selecting the jpg or png file when we click on the Extract text from Image button we get:-
The followings are the details which is extracted from ID card
 ![image](https://github.com/Kartikahuja72/Thai_ID_OCR_App/assets/121183525/6ddae234-4b79-4643-af37-5b5628a62ce1)

And when we scroll a little bit we get the total successful and failed OCR Operatiions:-
 ![image](https://github.com/Kartikahuja72/Thai_ID_OCR_App/assets/121183525/79b44df1-94ea-4c3c-9215-181c3bfa5d73)


And as this Data is Stored in Database:-
 ![image](https://github.com/Kartikahuja72/Thai_ID_OCR_App/assets/121183525/46f36847-5f89-4b02-b239-3821feb87d3a)

The following are the result which is tested on console:
 
![image](https://github.com/Kartikahuja72/Thai_ID_OCR_App/assets/121183525/52c61d22-77f2-4831-897a-681b79e5b70b)




Project Files:-
In view folder there is Index.ejs file which is main frontend file:-
![image](https://github.com/Kartikahuja72/Thai_ID_OCR_App/assets/121183525/c2d9308f-12f4-4e91-be85-8567e06beae0)

                                              


Index.js is the main node.js file in which my project backend is there:-
Package.json and package-lock.json are the files which contain all the dependencies and sub-dependencies:-
                                     ![image](https://github.com/Kartikahuja72/Thai_ID_OCR_App/assets/121183525/725d31bb-db41-4568-8722-f4e298773aeb)
                       
In Routes folder there is file Data which contain the Schema of My database:-
                                        ![image](https://github.com/Kartikahuja72/Thai_ID_OCR_App/assets/121183525/4f38361a-9658-4517-95a2-2b657680d298)
                   
In Controller folder there is file crud.js in that there is implementation of all the crud operation is present:-
                                 ![image](https://github.com/Kartikahuja72/Thai_ID_OCR_App/assets/121183525/7c7c4160-d1ca-4705-8743-cc2e377447fd)

                      

All the png,jpg file which we upload is stored in the upload folder


