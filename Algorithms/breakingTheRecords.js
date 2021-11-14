let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];

let breakingTheRecord = (scores) => {
    let minScore = scores[0];
    let maxScore = scores[0];
    let minCount = 0;
    let maxCount = 0;

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] < minScore) {
            minScore = scores[i];
            minCount++;
        }

        if (scores[i] > maxScore) {
            maxScore = scores[i];
            maxCount++;
        }
    }

    let minMaxRecoreds = [maxCount, minCount];

    return minMaxRecoreds;

}

console.log(breakingTheRecord(scores));