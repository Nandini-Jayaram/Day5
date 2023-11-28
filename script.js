//For the given JSON iterate over all the loops (for, for in , for of)
// Assuming entering the details of the employees in the DB

// const data = {
//     "employeeDetails": [
//       {"id": 1001, "firstName": "Ajit", "age": 35},
//       {"id": 1002, "firstName": "Vijay", "age": 40},
//       {"id": 1003, "firstName": "Surya", "age": 38},
//       {"id": 1004, "firstName": "Vikram", "age": 42}
//     ]
//   };

//   console.log("Output using 'For' loop");
//   for (let i=0; i<data.employeeDetails.length;i++) {
//     console.log("ID is " + data.employeeDetails[i].id);
//     console.log("Firstname is " + data.employeeDetails[i].firstName);
//     console.log("Age is " + data.employeeDetails[i].age);
//   }
//   console.log("--------------------------------------------------------------");

//   console.log("Output using 'for of' loop");
//   for (let user of data.employeeDetails) {
//     console.log("ID is " + user.id);
//     console.log("Firstname is " + user.firstName);
//     console.log("Age is " + user.age);
//   }
//   console.log("---------------------------------------------------------------");

//   console.log("Output using 'for in' loop");
//   for (let index in data.employeeDetails) {
//     console.log("Id is " + data.employeeDetails[index].id);
//     console.log("Firstname is " + data.employeeDetails[index].firstName);
//     console.log("Age is " + data.employeeDetails[index].age);
//   }

// Creating Resume in JSON Format

console.log(
  "*********************************************************************************************"
);
console.log("Nandini Jayaram's curriculum vitae in JSON Format");
const resume = {
  personalInformation: {
    firstName: "Nandini",
    lastName: "Jayaram",
    email: "jnandini843@gmail.com",
    address: "Bangalore,Karnataka,India",
    linkedIn: "www.linkedin.com/in/nandini-jayaram-workhub",
    github: "https://github.com/Nandini-Jayaram",
  },
  objective:
    "Having 9 years of expetise in IT sector, looking for a challenging role in a reputable organization to utilize my technical, database, and management skills for the growth of the organization as well as to enhance my knowledge about new and emerging trends in the IT sector. Hold M.Tech in Software Engineering from BITS,Pilani",
  education: [
    {
      degree: "Master of Technologies",
      institution: "BITS,Pilani",
      graduation: "2018",
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "Kuvempu University,Shimoga",
      graduation: "2014",
    },
    
  ],
  workExperience: [
    {
      position: "Business Transformation Consultant",
      company: "IBM Pvt Ltd",
      responsibilities:
        "TM1 Consultant with a demonstrated history of working in TM1 performance model(10.1 & 10.2), Cubes, Dimensions, Turbo Integrator, Rules, Feeders, Snapshot, Slice, Chore and Web Sheet.",
    },
    {
      position: "Senior Software Engineer",
      company: "Wipro Technologies",
      responsibilities: [
        " Worked in implementation and support of BW,Extensive data modeling experience in BW 7.X Administrator workbench which includes, Creation of Cubes, ODS / DSO, ADSO, Composite Provider, Update Rules, Transformations, DTP's",
        "Planning, Budgeting & Forecasting Budgeting and forecasting for Group reporting",
      ],
    },
  ],
  certificationAndCredentials: [
    {
      title: " IBM Planning Analytics Workspace V2.0.x Modeler",
      authorizedby: "IBM: www.youracclaim.com/badges/c46e9247-a71f-4a60-bf4c-2406896dc05f/email",

    },
    {
      title: "Python and Pandas for Data Engineering",
      authorizedby: "Duke University : coursera.org/verify/DVYCHAYWG3DV",
    },

  ],
};

console.log(resume);
