
function fetch(url) {
    return new Promise((resolve, reject) => {
        https
            .get(url, (res) => {
                let result = '';
                res.on('data', (chunk) => {
                    result += chunk;
                });
                res.on('end', () => {
                    resolve(JSON.parse(result));
                });
            })
            .on('error', (error) => {
                reject(error);
            });
    });
}


const { total_pages, data } = await fetch(
    `https://jsonmock.hackerrank.com/api/countries?page=1`
);


const answer = findInCountries(data, code);
if (answer) return answer.name;

for (let i = 2; i <= total_pages; i++) {
    const { data } = await fetch(
        `https://jsonmock.hackerrank.com/api/countries?page=${i}`
    );
    const answer = findInCountries(data, code, i);
    if (answer) return answer.name;
}

function findInCountries(countries, code, i = 1) {
    return countries.find((c) => c['alpha2Code'] === code);
}

