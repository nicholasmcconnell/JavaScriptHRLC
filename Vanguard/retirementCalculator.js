/*

Write a program to determine if a client was able to retire, 
given the retirement age and monetary requirements in order to retire by certain ages.

*/

/*
1. client can retire after 59.5 years of age
    -before the are subject o irs withdrawal penalties t pre tax retirement investments
2. To retire comrfortably
    - cliente needs 25 times their income in investments
Functionality 
    - inidcate client is old enough to retire without penalties and has appropriate income level to be comforable in retirement

 */

/*
Solutions
    yearly income 


*/
const clientAge = 40;

const incomeToInvestmentCompare = (clientIncome, clientInvestmentSum) => {
    return (clientIncome * 25 >= clientInvestmentSum)
}

const RetirementCalculator2 = (clientAge) => {
    const clientAgeRequirement = 59.5;
    const clientIncome = 100000;

    const clientInvestmentSum = clientIncome * 25;
    const clientBday = '4/11/1975';
    const clientBdayArr = clientBday.split('/');

    let clientDate = new Date();
    let todaysDate = new Date();


    clientDate.setFullYear(clientBdayArr[2], clientBdayArr[1], clientBdayArr[0]);
    let clientBirthYear = clientDate.getFullYear();
    let clientBirthMonth = clientDate.getMonth();
    let clientBirthDay = clientDate.getDate();

    console.log(clientBirthYear, clientBirthMonth, clientBirthDay)


    if ((todaysDate.getFullYear - clientDate) < clientAgeRequirement) {
        return ('To young to retire without IRS Penalty,.')
    } else if ((todaysDate.getFullYear - clientDate) > clientAgeRequirement && incomeToInvestmentCompare(clientIncome, clientInvestmentSum)) {

        return ('You can retire without ')
    } else if ((todaysDate.getFullYear - clientDate) === 59) {
        let monthsArr = new Array(12);

        if (todaysDate.getMonth >)



    }

    //caluclate client age;

    /*
    1. if client age < 59.5
        - calculate decimal by reducing monthes of incomplete year to decimal
        - calculate age from birdate to most recent birthday
            - JS Date Object or 
            - arr of month values
                - get values of current month
                - if less than birth month subtract 
                    - get differnece
                    - very similar to the tool algorithem of hacker rank assesment
                    - more specific the days can be considered as well
                - if months are the same
                    - get the days and if >= then its all good
                    - else just subtract the difference
                    once month difference is found
                        - days could be handled similarly
        - return can't retire but with projection of whether or not the will meet other criteria when reaching 59.5 if they continue with current income to investment ratio
        - also return the loss in penatlies
            - then they atleast have all the informatin needed

    2. if client is of age
        - compare income * 25 and see if it is >= to current investment value
            -if yes, return other possibilites
                - if there is excess
                    - perhaps they want to start investments for grandchildren college
                    - or they want are open to higher return higher risk with the surplus  of investment funds
            - if not, return no but also an age where they will potentially meet the criterai for comfortable retirement on current track
                - or, what needs to change about the current track in order to meet a retirement age
                    - perhaps changing standard of living to reach retirement faster, increase % of investments

        - geting investments
            - gathering worth of investments may be fluctuating
                - if we consider stock values - a snapshot of the date would need to be supplied to account for flucutating market values
            -

    */

}

console.log(RetirementCalculator2(clientAge))


// const clientAge = 25;
const salary = 30000;
const retirementAge = 65;
const retirementNeeded = 100000;

const RetirementCalculator = () => {
    let clientAge = 25;
    let salary = 5;
    let retirementAge = 65;
    let retirementNeeded = 100000;

    //need years remaining
    let yearsLeft = retirementAge - clientAge;
    //years remaing * salary >= retirementNeeded return true

    return canRetire = ((yearsLeft * salary) >= retirementNeeded) ? true : false;

    // return canRetire

}

// console.log(RetirementCalculator())