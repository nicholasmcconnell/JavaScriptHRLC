

const formatDate = () => {

        let d = new Date();
    

        let datesArr = [];

        // console.log(day.getDate())
        for (let i = 0; i <= 6; i++) {
            let date = i - d.getDay();
            let day = new Date(d.setDate(d.getDate() + date))
            // console.log(date, d.getDate())
            datesArr.push(`${d.getMonth() + 1}-${day.getDate()}-${d.getFullYear()}`)
        }

        // return datesArr;
   console.log(`${d.getMonth() + 1}-${d.getDate()}-${d.getFullYear()}`)

}

console.log(formatDate());