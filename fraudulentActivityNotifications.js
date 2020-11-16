

const activityNotifications2 = (expenditures, d) => {
    //for loop -> slice out median array, sort
    //get the median
    //then return median
    let notifications = 0;
    let medianArr = [];

    for (let i = 0; i < expenditures.length - d; i++) {
        for (let j = i; j < d + i; j++) {
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
// console.log(activityNotifications2(expenditures, d))

// ************************************

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

// ***************************************************

const d = 5
const expenditures = [2, 3, 4, 2, 3, 6, 8, 4, 5]

const fraudulentActivityCountSort = (expenditures, d) => {
    const countArr = new Array(201).fill(0);
    let notifications = 0;

    for(let i = 0; i < d; i++){
        countArr[expenditures[i]]++;
    }

    for (let i = d; i < expenditures.length; i++) {
        const medianx2 = getMedianx2(countArr, d); //helper functino
        console.log(medianx2);

        if(expenditures[i] >= medianx2) {
            notifications++;
        }
        if(i === expenditures.lengh-1){
            break;
        }

        countArr[expenditures[i-d]]--;
        countArr[expenditures[i]]++;

    }
    return notifications;
}

const getMedianx2 = (countArr, d) => {
    let sum = 0;

    for(let i = 0; i < countArr.length; i++){
        sum += countArr[i];
        console.log('sum', sum, i);
        if(sum *2 === d){
            return(i*2+1)
        }
        if(sum*2>d){
            return (i*2)
        }
    }
}

console.log(fraudulentActivityCountSort(expenditures, d))