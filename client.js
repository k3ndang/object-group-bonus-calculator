const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// Lopp over the employees array
for (let employee of employees){
  console.log(employees);
 let bonusInfo = getEmployeeBonus(employee);
 console.log(`bonusInfo for ${employee.name}`, bonusInfo);
}


function getEmployeeBonus(employee) {
  let bonusPercentages; // tutti fruiti, figure out the values


  // figure out bonus percentage base on employee rating
  if (employee.reviewRating <= 2) {
    // no bonus for you
    bonusPercentages = 0;
  }
  else if (employee.reviewRating === 3) {
    bonusPercentages = 0.04
  }
  else if (employee.reviewRating === 4) {
    bonusPercentages = 0.06
  }
  else if (employee.reviewRating === 5) {
    bonusPercentages = 0.10
  }

  // modify the bonus based on 
  // 
  if (employee.employeeNumber.toString().length === 4 ) {
    bonusPercentages += 0.05
    console.log(`${employee.name} 4 digits bonus`);
    
  }




  console.log('bonusPercentage', bonusPercentages);
  
  return {
    name: employee.name,
    bonusPercentages: bonusPercentages,
    // todo, put stuff in here
  };
}




console.log( employees );
