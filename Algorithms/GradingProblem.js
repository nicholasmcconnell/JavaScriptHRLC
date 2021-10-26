const { textSpanEnd } = require("typescript");

const grades = [73, 67, 38, 33];

const gradingStudents = (grades) => {
    const roundedGrades = [];
    // Write your code here
    for (const grade of grades) {
        console.log(grade % 5)

        //divisible by 5 push to array
        if (grade % 5 === 0) {
            roundedGrades.push(grade);
            continue;
        }

        //less than 38 => continue
        if (grade < 38) {
            roundedGrades.push(grade);
            continue;
        }

        let tenthSpot = grade % 5;
        let difference = 0;
        if ((tenthSpot >= 3) && (tenthSpot < 5)) {
            difference = 5 - tenthSpot;
            roundedGrades.push(grade + tenthSpot)
            // } else if ((tenthSpot >= 8) && (tenthSpot < 10)) {
            //     difference = 10 - tenthSpot;
            //     roundedGrades.push(grade + difference)
        } else {
            roundedGrades.push(grade);
        }
    }


    //not divisibly by 5
    //get last number 
    //if less than 5 subtract and if difference less than 3 round up
    //else push grade

    return roundedGrades;

}

console.log(gradingStudents(grades))
