//run time - Big-O -> phone book example

const num = 100000;

// divide by 3
//divide by 2
//subtract 1

//while loop
// if modulus 3 divide by three
//jif modulus 2 diide by 2
//else subtract 1
//count loops

// const minStepsToOne = (num) => {


//     let count = 0;
//     if (num === 1) return 0;
//     if (num === 3 || num === 2) return 1;

//     if (num % 2 === 0) {
//         num = num / 2
//         count++;
//     }
//     if (num % 3 === 0) {
//         num = num / 3
//         count++;
//     }


//     while (num > 1) {
//         if (num === 3 || num === 2) return ++count;
//         if (num === 1) return count;

//         if ((num - 1) % 3 === 0) {
//             num--;
//         } else if (num % 3 === 0) {
//             num = num / 3;
//         } else if (num % 2 === 0) {
//             num = num / 2
//         } else {
//             num -= 1
//         }
//         count++
//     }

// }

// console.log(minStepsToOne(num))

//recursion solution
//recursive tree

const minStepsToOne = (num) => {
    //helper method recursino
    function traverse(current) {
        if (current === 1) {
            return 0;
        }

        //subtract 1
        let option = traverse(current - 1)
        //divide 3
        if (current % 3 === 0) {
            let divide3 = traverse(current / 3)
            option = math(min(option, divide3))
        }

        //divide 2

        if (current % 2 === 0) {
            let divide2 = traverse(current / 2)
            option = math(min(option, divide2))
        }
        return option + 1;
    }

    return traverse(num);
}

/////run time O(k^n) n = input
//k = avg number of branches (recursive tree) per node ~= 1 + 1/2 + 1/3        
//wastefull = it repetes already slved regionns

console.time('recursion: ')
console.log(minStepsToOne(num))
console.timeEnd('recursion: ')

const minStepsToOneMemoization = (num) => {
    // wont work for 100000 - there is a call limit to call stack
    //runtime O(n) - linear
    //helper method recursino
    const cache = {};

    function traverse(current) {
        if (current in cache) {
            return cache[current]
        }
        if (current === 1) {
            return 0;
        }

        //subtract 1
        let option = traverse(current - 1)
        //divide 3
        if (current % 3 === 0) {
            let divide3 = traverse(current / 3)
            option = math(min(option, divide3))
        }

        //divide 2

        if (current % 2 === 0) {
            let divide2 = traverse(current / 2)
            option = math(min(option, divide2))
        }

        cache[current] = option + 1;
        return option + 1;
    }

    return traverse(num);
}

///make cache persistent
//what is best solution -> depends on what we 

//convert rcursive to memoization -> not all recursive to memoization
//1 creat cache
//2 check cache
//3 write to cache

console.time('memoization: ')
console.log(minStepsToOneMemoization(num))
console.timeEnd('memoization: ')

//tabulatin is the solution
//bottom up approach

const minStepsToOneTabulation = (num) => {
    const table = new Array(n + 1);
    table[1] = 0;

    for (let i = 2; i < table.length; i++) {
        // subtract 1 
        let option = table[i - 1];

        // divide by 3
        if (i % 3 === 0) {
            let divide3 = table[i / 3];
            option = Math.min(option, divide3);
        }

        // divide by 2
        if (i % 2 === 0) {
            let divide2 = table[i / 2];
            option = Math.min(option, divide2);
        }

        table[i] = option + 1;
    }

    return table[n];
}

console.time('memoization: ')
console.log(minStepsToOneTabulation(num))
console.timeEnd('memoization: ')