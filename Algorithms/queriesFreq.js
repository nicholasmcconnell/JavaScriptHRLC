let queries = [[1, 1], [2, 2], [3, 2], [1, 1], [1, 1], [2, 1], [3, 2]];

const freqQueries = (queries) => {

    //1 => insert into data structure => load map
    //2=> remove from data structure" => remove from map
    //3 ==> push to array value that has frequency of [1] in data structure => loop over map and push key to result arra if matchs [1]


    const results = [];
    const freq = [];

    for (let query of queries) {
        let action = query[0];
        let value = query[1]
        switch (action) {
            case 1:
                !freq[value] ? freq[value] = 1 : freq[value]++;
                break;
            case 2:
                freq[value] ? freq[value]-- : 0;
                break;
            case 3:
                results.push(freq.indexOf(value) === -1 ? 0 : 1);
                break;
            default:
                break;
        }
    }

    return results;

}

console.log(freqQueries(queries));

// queries.forEach(query => {
//     switch (query[0]) {
//         case 1:
//             valueTotals[query[1]] ? valueTotals[query[1]]++ : valueTotals[query[1]] = 1;
//             break;
//         case 2:
//             valueTotals[query[1]] ? valueTotals[query[1]]-- : 0;
//             break;
//         case 3:
//             let flag = false;
//             for (let [key, value] of Object.entries(valueTotals)) {
//                 if (value === query[1]) {
//                     flag = true;
//                 }
//                 if (flag === true) break;
//             }
//             !flag ? results.push(0) : results.push(1);
//             break;
//         default:
//             break;

//     }
// })


