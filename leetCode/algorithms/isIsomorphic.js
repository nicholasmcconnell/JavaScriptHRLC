const s = "abadc";
const t = "baaba";



var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false;
    let mapS = {};
    let mapT = {};
    for (let i = 0; i < s.length; i++) {
        if (!mapS[s[i]] && !mapT[t[i]]) {
            mapS[s[i]] = t[i];
            mapT[t[i]] = s[i];
            // console.log(mapS, mapT)
        } else if (mapS[s[i]] && mapT[t[i]]) {
            console.log('iin else if')
            if (mapS[s[i]] !== t[i] || s[i] !== mapT[t[i]]) return false;
        } else return false;
        console.log(mapS, mapT)
    }
    return true;
};

console.log(isIsomorphic(s, t))



