

const formatDate = () => {
    //Make a new date
    //make 7 dates each a day further than the next
    //needs to check for the day every second
    
    let d = new Date();
    let start = setInterval(function(){console.log(d.getDay())}, 2000)

    console.log(start)
    
    for(let i = 0; i<=6; i++){
       console.log(d.setDate(d.getDate()+1));
       console.log(d.getDate())

        console.log(d.toString().split(' ')[0])

    }




//    return (`${date.getMonth()+1}-${date.setDate(date.getDate())}-${date.getFullYear()}`)


}

console.log(formatDate());