
[x] loop over employees array
[x] call a function with a single employee object
[x] console.log the return value of the function

for (let employee of employees)
    let returnVal = getBonus (employee)
    console.lof(returnVal);

The function

[] take one employee object
[] return a new object
    [] name
    [] bonusPercentage
    [] totalcompensation
    [] totalBonus

function getBonus(employee) {
    return {
        name,
        bonusPercentage,
        totalCompensation,
        totalBonus
    }
}

Bonus calculation

    based on rating
    if (rating = 2){
        no bonus
    if (rating = 3)
        bonus = 4%
    if (rating =4)
        bonus = 6%
    if (rating = 6)
        bonus = 10%
    }
    done 👆
--------------------
    based on employee number
    if (number > 4)
        bonus += 5%
    done 👆
--------------------    
    based on annual income
    if (income > $65000)
        bonus = 1%
    done 👆
--------------------   
    no bonus above 13% or bonus equal 0%
    done 👆
--------------------