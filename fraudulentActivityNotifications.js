const expenditures = [2, 3, 4, 2, 3, 6, 8, 4, 5];
const d = 5;

const activityNotifications = (expenditures, d) => {
    //determine number of notifications over n days
    //on d+1 day find median of previus d days transactions and if d+1 day is x2 median notifications ++
    //iterate over expenditures in sections of d
    //find median of section - if next index is > x2 median => notifications++.
    //edge case -  end of array = if end of median section =1 is > expenditures.length => return notifications.
    let days = 9;
    let notifications = 0;

    for (let i = 0; i < expenditures.length; i++) {
        //get sections of d
        //find median of d
        let medianArr = []

        for(let j=i; j<(i+5); j++){
            if(j <= (expenditures.length-2)){
                medianArr.push(expenditures[j])
            } else {
                return notifications;
            }
        }
        console.log(medianArr);
        
    }
}

console.log(activityNotifications(expenditures, d))