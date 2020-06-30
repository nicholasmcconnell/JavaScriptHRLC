let p = 2;
let s1 = 'hello';
let s2 = 'world';

function twoStrings(s1, s2) {
    for (let i = 0; i < s1.length; i++) {
        if (s2.search(s1[i]) > -1) {
            return process.stdout.write("YES");
                    }
    }
   return process.stdout.write("NO");
   
}

console.log(twoStrings(s1, s2));