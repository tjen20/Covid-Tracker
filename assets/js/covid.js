function getApi() {
    const requestUrl = 'https://api.covid19api.com/total/country/united-states/status/confirmed';

    fetch(requestUrl)
        .then(function(res) {
            return res.json();
            // console.log(res.json());
        })
        .then(function(data) {
            var lastElement = data[data.length - 1];
            // console.log(lastElement)
            const result = document.querySelector('.result');
            result.textContent = `${lastElement.Cases}`
        })
}