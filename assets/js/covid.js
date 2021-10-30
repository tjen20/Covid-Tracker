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
            const updated = document.querySelector('.updated');
            result.textContent = `${lastElement.Cases}`
            updated.textContent = `Last Updated: ${lastElement.Date}`
        })
}

function statePi() {
    const requestStates = '';

    fetch(requestStates)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            const stateFilter = document.getElementById('#state');
            console.log(stateFilter)

        })
}
// document.addEventListener('click', statePi)

// https://api.covidtracking.com/v2/states/<stateid>.json

// Modal functionality
$("#modalSave").on("click", function() {
    var userVaxInfo = {
        state: document.getElementById("state").value,
    }
    localStorage.setItem('userVaxInfo', JSON.stringify(userVaxInfo))
    $("#modalM").removeClass('is-active')
})

$("#modalCancel").on("click", function() {
    $("#modalM").removeClass('is-active')
})

$(".delete").on("click", function() {
    $("#modalM").removeClass('is-active')
})

// Local Storage



