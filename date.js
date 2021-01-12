
/////////ORIGINAL FORMATDATE USED INT UTILFUNCTIONS.JS OF FITNESS TRACKER
// const formatDate = () => {
//         let d = new Date();
//         let datesArr = [];

//         for (let i = 0; i <= 6; i++) {
//             let date = i - (d.getDay());
//             let day = new Date(d.setDate(d.getDate() + date))
//             datesArr.push(`${d.getMonth() + 1}-${day.getDate()}-${d.getFullYear()}`)
//         }

//         return datesArr;
// }

// console.log(formatDate()[0]);


const formatDate = (currSunYear, currSunMonth, currSunDay) => {
    let d = new Date(currSunYear, currSunMonth, currSunDay);
    let datesArr = [];

    for (let i = 0; i <= 6; i++) {
        let date = i - (d.getDay());
        let day = new Date(d.setDate(d.getDate() + date))
        datesArr.push(`${d.getMonth() + 1}-${day.getDate()}-${d.getFullYear()}`)
    }

    return datesArr;
}

const weeksPrior = () => {
    let numOfWeeks = 3;
    let weekLength = 7;
    let d = new Date()
    let currSun = formatDate()[0].split('-');
    let currSunMonth =  d.getMonth();
    let currSunDay = d.getDate();
    let currSunYear = d.getFullYear();

    console.log(currSunYear, currSunMonth, currSunDay)
    // let d = new Date(currSunYear, currSunMonth, currSunDay-28);
    let weekArr = formatDate(currSunYear, currSunMonth, currSunDay -21);
    console.log(weekArr)
}

weeksPrior();