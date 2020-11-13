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

    for(const [i, cv] of expenditures.entries()){
        console.log(i, cv);
    }





}

console.log(activityNotifications(expenditures, d))