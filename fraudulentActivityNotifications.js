const expenditures = [10, 20, 30, 40, 50];
const d = 3;

const activityNotifications2 = (expenditures, d) => {
    //for loop -> slice out median array, sort
    //get the median
    //then return median
    let notifications = 0;
    let medianArr = [];

    for (let i = 0; i < expenditures.length - d; i++) {
        for (let j = i; j < d+i; j++) {
            medianArr.push(expenditures[j]);
        }
        console.log(medianArr);
    //     let medianArr = expenditures.slice(i, i + d).sort((a, b) => a - b);
    //     console.log(medianArr)
        let median = getMedian(medianArr);

        if (expenditures[i + d] >= (median * 2)) {
            notifications++;
        }

        medianArr = [];
    }
    return notifications;
}

const insertionSort = (inputArr) => {
    let length = inputArr.length;
    for (let i = 1; i < length; i++) {
        let key = inputArr[i];
        let j = i - 1;
        while (j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j];
            j = j - 1;
        }
        inputArr[j + 1] = key;
    }
    return inputArr;
};

const getMedian = (medianArr) => {
    medianArr.sort((a, b) => a - b);
    // let sortedMedianArr = insertionSort(medianArr)
    let middle = Math.floor((medianArr.length - 1) / 2);
    if (medianArr.length % 2) {
        return medianArr[middle];
    } else {
        return (medianArr[middle] + medianArr[middle + 1]) / 2.0;
    }
}
console.log(activityNotifications2(expenditures, d))

const activityNotifications = (expenditures, d) => {
    //determine number of notifications over n days
    //on d+1 day find median of previus d days transactions and if d+1 day is x2 median notifications ++
    //iterate over expenditures in sections of d
    //find median of section - if next index is > x2 median => notifications++.
    //edge case -  end of array = if end of median section =1 is > expenditures.length => return notifications.
    let notifications = 0;

    for (let i = 0; i < expenditures.length; i++) {
        //get sections of d
        //find median of d
        let medianArr = [];

        for (let j = i; j < (i + d); j++) {
            if (j <= (expenditures.length - 2)) {
                medianArr.push(expenditures[j])
            } else {
                return notifications;
            }
        }
        let median = () => {
            medianArr.sort((a, b) => a - b);

            let middle = Math.floor((medianArr.length - 1) / 2);
            console.log('middle', middle)
            if (medianArr.length % 2) {
                return medianArr[middle];
            } else {
                return (medianArr[middle] + medianArr[middle + 1]) / 2.0;
            }

        }
        if (expenditures[i + d] >= (median() * 2)) {
            notifications++;
        }
        // console.log(medianArr, median(), expenditures[i + 6], notifications)
    }
}

// console.log(activityNotifications(expenditures, d))