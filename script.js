//ES6 way - CLASSES - Create a new Employee class that adds a new employee and console logs them
// Goals:
// 1. Create a new Employee class with a constructor for Employee giving them a firstname, lastname, email, and birthdate
// 2. Instantiate (i.e. create a new instance) of an Employee with your info and save it to a const with your first name
// 3. After step 2, console log your const and then try to console.log parts of the object
// 4. Then create a const array that creates many "new Employee" objects and says to an array.  Console this object as a whole and parts of it
// 5. Add methods to your class to "getEmployees" which just returns all the fields in the object.
//    Also add methods to addEmployee (this will be static) and a method to editEmployee
//    Test your methods using JS
// 6. Try to get instances of your class object to display in the table.  You can set the innerhtml of the
//    of the table to be empty and then replace it with the looped-through values of your object

// 1. 
class Employee {
  constructor(firstName, lastName, email, birthdate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.birthdate = birthdate;
  }
  //5
  getEmployees(){
    return {
    firstName: this.firstName, 
    lastName: this.lastName, 
    email: this.email, 
    birthdate: this.birthdate
    };
  }
  static addEmployee(first,last,email,birthdate) {
    return new Employee (first,last,email,birthdate);
  }

  editEmployee(first,last,email,birthdate) {
    this.firstName = first;
    this.lastName = last;
    this.email = email;
    this.birthdate = birthdate;
  }
};

//2
const Khue = new Employee ('Khue', 'Nguyen', 'minhkhue7705@gmail.com', '07/07/2005');

//3
console.log(Khue);
console.log(`Employee's Name: ${Khue.firstName} ${Khue.lastName}
            "Employee's Email: ${Khue.email}
            "Employee's Birthdate: ${Khue.birthdate}`);

//4
const employees= [
  new Employee ('Ariana', 'Grande', 'ari1103@gmail.com', '11/03/1975'),
  new Employee ('Joe', 'Cawfee', 'ilovecoffee@gmail.com', '04/25/1992'),
  new Employee ('Maris', 'Jones', 'm.jones@gmail.com', '09/17/1986'),
];
console.log(employees);
for (let i=0; i<employees.length; i++) {
    console.log(
      `Employee's Name: ${employees[i].firstName} ${employees[i].lastName}
      Employee's Email: ${employees[i].email}
      Employee's Birthdate: ${employees[i].birthdate}`
    )
};

//5
const Jones = Employee.addEmployee('Jones','Mai','idontwanttodothis@gmail.com','09/09/1999');
const Mai = Employee.addEmployee('Zuko', 'Mai', 'avatar@gmail.com', '07/03/1932');
const Jason = Employee.addEmployee('Jason', 'Derulo','jason.deruloooo@gmail.com', '11/04/2000');
Jason.editEmployee('Cole','Kyle','sixseven@gmail.com','06/07/1967');

const allEmployees = [Jones, Mai, Jason];
for(let i=0; i <allEmployees.length; i++){
  console.log(allEmployees[i].getEmployees());
}

//6
const tableBody = document.querySelector('#employeeTable tbody');
tableBody.innterHTML = ""; // Clear table before adding rows

allEmployees.forEach(emp => {
  const data = emp.getEmployees();
  const row = `<tr>
  <td>${data.firstName}</td>
  <td>${data.lastName}</td>
  <td>${data.email}</td>
  <td>${data.birthdate}</td>
  </tr>`;
  tableBody.innerHTML +=row;
});

// 2 - CALBACKS
function verifyPayment(orderTotal, callback) {
  if (orderTotal < 5000) {
    callback (null, `Payment of $${orderTotal} approved.`);}
  else { 
    callback (`Payment of $${orderTotal} requires manager approval.`, null);
  }
}
verifyPayment (3000,(error, success) => {
  if (error) {
    console.log(error);}
  else {
    console.log(success);
  }
});
verifyPayment(6000, (error, success) => {
  if (error) {
    console.log(error);}
  else{
    console.log(success);
  }
  });

//3 - PROMISES
function verifyPayment(orderTotal) {
  return new Promise ((resolve, reject) => {
    if (orderTotal < 5000) {
      resolve (`Payment of $${orderTotal} approved.`);}
      else {
        reject (`Payment of $${orderTotal} requires manager approval.`);
      }
    });
}
verifyPayment(3000)
  .then(success => console.log(success))
  .catch(error => console.log(error));

verifyPayment(6000)
  .then(success => console.log(success))
  .catch(error => console.log(error));

// 4 - ASYNC/ AWAIT
function verifyPayment(orderTotal) {
console.log(`Checking payment for $${orderTotal}...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve(`Payment of $${orderTotal} approved`);}
        else {
            reject(`Payment of $${orderTotal} declined`);}
    }, 1000);
  });
}
async function processPayment(orderTotal) {
  try {
      const result = await verifyPayment(orderTotal);
      console.log('Valid', result);
  } catch (error) {
      console.log('Invalid', error);
  }
}
processPayment(100.00);
processPayment(50.00);
processPayment(200.00);




