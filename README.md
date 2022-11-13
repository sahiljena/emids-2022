# emids-2022
## Description 
To be able to enter a prescription with structured data in a software system, within a comparable time to hand written prescription

EMR software is used by doctors to enter all patient information. They also add the prescribed prescriptions, prescription data entry in software makes it possible for pharmacy and insurance firms to access prescription information and lends itself to research and analytics, but it takes far longer than entering a prescription by hand.

We will therefore simplify and make prescription data entry comparable to handwritten prescription data entry.

## 🛠️ Tech Stack
- React.js for Frontend
- Node.js and Express.js for Backend
- MonogDB for Database
- Tailwind CSS for frontend UI

## cURL for backend

### Finding Patient by Name

``` 
curl --location --request GET 'http://localhost:5000/api/patient/find?q={name}'
```

### Finding Doctor by Name
```
curl --location --request GET 'http://localhost:5000/api/doctor/find?q=dr'
```

### Adding a new Doctor
```
curl --location --request POST 'http://localhost:5000/api/doctor/new' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'Cookie: ARRAffinity=59ed4a69001d7adf38f26ae63c4e590c47dbb2ac549c856f50127e235fd98cf4; ARRAffinitySameSite=59ed4a69001d7adf38f26ae63c4e590c47dbb2ac549c856f50127e235fd98cf4' \
--data-urlencode 'name=Dr. Saumya Gupta
' \
--data-urlencode 'degree=MBBS' \
--data-urlencode 'specialization=Dentist' \
--data-urlencode 'address=D57/51B, Siddhgiri Bagh, Varanasi 201001' \
--data-urlencode 'registrationNumber=02916'
```

### Adding a new Patient

```
curl --location --request POST 'http://localhost:5000/api/patient/new' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'Cookie: ARRAffinity=59ed4a69001d7adf38f26ae63c4e590c47dbb2ac549c856f50127e235fd98cf4; ARRAffinitySameSite=59ed4a69001d7adf38f26ae63c4e590c47dbb2ac549c856f50127e235fd98cf4' \
--data-urlencode 'name=Sahil Kumar Jena' \
--data-urlencode 'age=21' \
--data-urlencode 'symtoms=complain of fever' \
--data-urlencode 'gender=Male' \
--data-urlencode 'address=chennai' \
--data-urlencode 'phoneNumber=8787064557'
```

📂 Project Organization
------------

    ├── README.md          <- The top-level README for developers using this project.
    │
    ├── emids-frontend
    │       ├── package.json        <- Containing the required node modules start up scripts etc
    │       ├── postcss.config.js   <- Tailwind css file
    │       ├── tailwind.config.js  <- Tailwind css file
    │       ├── public             
    │       └── src
    │           ├── App.js          <- React App 
    │           ├── index.js        <- React App startup 
    │           ├── Home.js         <- Home Page 
    │           ├── Layout.js       <- Navigation Structure 
    │           ├── pages           <- Folder for pages
    │           └── components      <- Folder for react components
    │
    │
    └── emids-backend
        ├── node_modules      <- Folder containg node modules 
        ├── .env              <- MongoDB connection string
        ├── prescription
        │    └── index.js     <- Making the html for EHR and converting to pdf format  
        ├── routes
        │    ├── patient.js   <- API  Routes for add/deleting a patient  
        │    └── doctor.js    <- API Routes for add/deleting a doctor
        ├── models
        │    ├── patient.js   <- Defining  Database Structure Routes for  a patient  
        │    └── doctor.js    <- Defining  Database Structure Routes for  a doctor 
        │
        ├── Prescription.pdf. <- Sample PDF File for editing
        │
        ├── index.js          <- Express app with startu
        ├── package.json      <- Containing the required node modules start up scripts etc
        └── db
             └──  conn.js     <- Connect to MongoDB 
             
## Clone and Start
#### Starting the frontend

```
cd emids-frotned
npm start
```


#### Starting the backend

```
cd emids-backend
node index
```



## Progress till now
### Day - 3 
<a href="https://ibb.co/8N0HCN4"><img src="https://i.ibb.co/Gn0q6n3/DOC-1.png" alt="DOC-1" border="0"></a>
<a href="https://ibb.co/GpvT5sJ"><img src="https://i.ibb.co/9g9trwv/DOC-2.png" alt="DOC-2" border="0"></a>
<a href="https://ibb.co/tQCQH0C"><img src="https://i.ibb.co/6rsryKs/DOC-3.png" alt="DOC-3" border="0"></a>
<a href="https://ibb.co/B3bKBtb"><img src="https://i.ibb.co/LRmh18m/DOC-4.png" alt="DOC-4" border="0"></a>
<a href="https://ibb.co/jRNCVcj"><img src="https://i.ibb.co/DpJBGxj/DOC-5.png" alt="DOC-5" border="0"></a>

### Day - 2
<a href="https://ibb.co/6vC0L13"><img src="https://i.ibb.co/YDsBwyz/response.png" alt="response" border="0"></a>



<a href="https://ibb.co/93hRCXH"><img src="https://i.ibb.co/XkDmvBx/sa-presc.png" alt="sa-presc" border="0"></a>

<a href="https://ibb.co/xCjKP8M"><img src="https://i.ibb.co/4mTw9gj/Screenshot-2022-11-12-173145.png" alt="Screenshot-2022-11-12-173145" border="0"></a>

