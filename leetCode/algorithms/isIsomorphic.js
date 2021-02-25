const s = "badc";
const t = "baba";



var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false;
    let mapS = new Map();
    let mapT = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!mapS.has(s[i]) && !mapT.has(t[i])) {
            mapS.set(s[i], t[i]);
            mapT.set(t[i], s[i]);
        } else if (mapS.has(s[i]) && mapT.has(t[i])) {
            if (mapS.get(s[i]) !== t[i] || s[i] !== mapT.get(t[i])) return false;
        } else return false;
    }
    return true;
};

console.log(isIsomorphic(s, t))



