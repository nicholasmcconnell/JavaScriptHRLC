

const formatDate = () => {
        let d = new Date();
        let datesArr = [];

        for (let i = 0; i <= 6; i++) {
            let date = i - (d.getDay());
            let day = new Date(d.setDate(d.getDate() + date))
            datesArr.push(`${d.getMonth() + 1}-${day.getDate()}-${d.getFullYear()}`)
        }

        return datesArr;
}

// console.log(formatDate()[0]);

const weeksPrior = () => {
    let numOfWeeks = 3;
    let weekLength = 7;
    let currSun = formatDate()[0].split('-');
    let currSunMonth = currSun[0];
    let currSunDay = currSun[1];
    let curSunYear = currSun[2];

    console.log(currSunMonth, currSunDay, curSunYear)
    let d = new Date(2021, 0, 10);
    console.log(d)
}

weeksPrior();