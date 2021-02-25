const date = "2003-03-01"

const dayOfYear = (date) => {
    let arr = date.split('-');
    let year = arr[0];
    let month = arr[1];
    let day = arr[2]

    const endDate = new Date(`${month}/${day}/${year}`);
    const startDate = new Date(`01/01/${year}`)

    let diff = endDate.getTime() - startDate.getTime();
    let days = diff / 86400000;
    return days + 1;




};

console.log(dayOfYear(date))