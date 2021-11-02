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

// function statePi() {
//     var stateValue = document.getElementById('#state')
//     var requestStates = 'https://api.covidtracking.com/v2/states/ut.json'
//     console.log(requestStates);

//     fetch(requestStates, {mode: 'no-cors'})
//         .then(function(res) {
//             return res.json();
//         })
//         .then(function(data) {
//             // const stateFilter = document.getElementById('#state');
//             // console.log(stateFilter)

//         })
// }
// modalI.addEventListener('change', statePi)


// https://api.covidtracking.com/v2/states/<stateid>.json
// this api has a cors policy blocking the info






// Modal functionality
$('#modalActivation').on('click', function(event) {
    event.preventDefault()
    $("#modalM").addClass('is-active')
})

$("#modalSave").on("click", function(event) {
    event.preventDefault()
    // var userVaxInfo = {
    //     state: document.getElementById("state").value,
    // }
    // localStorage.setItem('userVaxInfo', JSON.stringify(userVaxInfo))
    $("#modalM").removeClass('is-active')
    $('#modalI').addClass('is-active')

})

$("#modalCancel").on("click", function(event) {
    event.preventDefault()
    $("#modalM").removeClass('is-active')
})

$(".delete").on("click", function(event) {
    event.preventDefault()
    $("#modalM").removeClass('is-active')
    $("#modalI").removeClass('is-active')
})

// Local Storage

$('#submitButton').on('click', function(event) {
    event.preventDefault()
    var userVaxInfo = document.getElementById("state").value;

    localStorage.setItem('userVaxInfo', userVaxInfo)
    // console.log(localStorage)
})


// function funct() {
//     const requestUrl = 'https://api.covidactnow.org/v2/state/${stateSort}.json?apiKey=72d323b5087c4d4f9ffbf223c4225d09';

//     fetch(requestUrl)
//         .then(function(res) {
//             return res.json();
//             // console.log(res.json());
//         })
//         .then(function(data) {
//             console.log(data)
//         })
// }


// $('#modalSave').on('click', funct)
    // event.preventDefault()
    // const stateSort1 = localStorage.getItem('userVaxInfo');
    // const stateSort = stateSort1.toLowerCase();
    // console.log(stateSort);
    // const requestStates = `https://api.covidactnow.org/v2/state/${stateSort}.json?apiKey=72d323b5087c4d4f9ffbf223c4225d09`;
    // console.log(requestStates);
   
    // fetch(requestStates)
    //     .then(function(res) {
    //         return res;
    //     })
    //     .then(function(data) {
    //         console.log(data)
    //         // const secondaryInfo = document.querySelector('.secondatyInfo');
    //         // secondaryInfo.textContent = `${data.notes}`

    //     })

    // {
    //     "state": "AK",
    //     "covid19Site": "http://dhss.alaska.gov/dph/Epi/id/Pages/COVID-19/monitoring.aspx",
    //     "twitter": "@Alaska_DHSS",
    //     "name": "Alaska",
    // }
const secondaryInfo = [
    {
        "state": "AK",
        "covid19Site": "http://dhss.alaska.gov/dph/Epi/id/Pages/COVID-19/monitoring.aspx",
        "twitter": "@Alaska_DHSS",
        "name": "Alaska",
    },
    {
        "state": "AL",
        "covid19Site": "https://alpublichealth.maps.arcgis.com/apps/opsdashboard/index.html#/6d2771faa9da4a2786a509d82c8cf0f7",
        "twitter": "@alpublichealth",
        "name": "Alabama",
    },
    {
        "state": "AR",
        "covid19Site": "https://www.healthy.arkansas.gov/programs-services/topics/novel-coronavirus",
        "twitter": "@adhpio",
        "name": "Arkansas",
    },
    {
        "state": "AS",
        "covid19Site": "https://www.americansamoa.gov/covid-19-advisories",
        "twitter": null,
        "name": "American Samoa",
    },
    {
        "state": "AZ",
        "covid19Site": "https://www.azdhs.gov/preparedness/epidemiology-disease-control/infectious-disease-epidemiology/covid-19/dashboards/index.php",
        "twitter": "@azdhs",
        "name": "Arizona",
    },
    {
        "state": "CA",
        "covid19Site": "https://update.covid19.ca.gov",
        "twitter": "@CAPublicHealth",
        "name": "California",
    },
    {
        "state": "CO",
        "covid19Site": "https://public.tableau.com/views/Colorado_COVID19_Data/CO_Hospital?%3Aembed=y&%3AshowVizHome=no",
        "twitter": "@cdphe",
        "name": "Colorado",
    },
    {
        "state": "CT",
        "covid19Site": "https://data.ct.gov/coronavirus",
        "twitter": "@ctdph",
        "name": "Connecticut",
    },
    {
        "state": "DC",
        "covid19Site": "https://coronavirus.dc.gov/page/coronavirus-surveillance-data",
        "twitter": "@_DCHealth",
        "name": "District of Columbia",
    },
    {
        "state": "DE",
        "covid19Site": "https://myhealthycommunity.dhss.delaware.gov/locations/state#testing",
        "twitter": "@Delaware_DHSS",
        "name": "Delaware",
    },
    {
        "state": "FL",
        "covid19Site": "https://experience.arcgis.com/experience/96dd742462124fa0b38ddedb9b25e429/",
        "twitter": "@HealthyFla",
        "name": "Florida",
    },
    {
        "state": "GA",
        "covid19Site": "https://dph.georgia.gov/covid-19-daily-status-report",
        "twitter": "@GaDPH",
        "name": "Georgia",
    },
    {
        "state": "GU",
        "covid19Site": "http://dphss.guam.gov/covid-19/",
        "twitter": "@guamdphss",
        "name": "Guam",
    },
    {
        "state": "HI",
        "covid19Site": "https://health.hawaii.gov/coronavirusdisease2019/",
        "twitter": "@HIgov_Health",
        "name": "Hawaii",
    },
    {
        "state": "IA",
        "covid19Site": "https://coronavirus.iowa.gov/",
        "twitter": "@IAPublicHealth",
        "name": "Iowa",
    },
    {
        "state": "ID",
        "covid19Site": "https://coronavirus.idaho.gov/",
        "twitter": "@IDHW",
        "name": "Idaho",
    },
    {
        "state": "IL",
        "covid19Site": "http://www.dph.illinois.gov/topics-services/diseases-and-conditions/diseases-a-z-list/coronavirus",
        "twitter": "@IDPH",
        "name": "Illinois",
    },
    {
        "state": "IN",
        "covid19Site": "https://www.in.gov/isdh/28470.htm",
        "twitter": "@statehealthin",
        "name": "Indiana",
    },
    {
        "state": "KS",
        "covid19Site": "https://www.coronavirus.kdheks.gov/160/COVID-19-in-Kansas",
        "twitter": "@kdhe",
        "name": "Kansas",
    },
    {
        "state": "KY",
        "covid19Site": "https://govstatus.egov.com/kycovid19",
        "twitter": "@CHFSKy",
        "name": "Kentucky",
    },
    {
        "state": "LA",
        "covid19Site": "http://ldh.la.gov/Coronavirus/",
        "twitter": "@LADeptHealth",
        "name": "Louisiana",
    },
    {
        "state": "MA",
        "covid19Site": "https://www.mass.gov/doc/covid-19-dashboard-may-10-2021/download",
        "twitter": "@massdph",
        "name": "Massachusetts",
    },
    {
        "state": "MD",
        "covid19Site": "https://coronavirus.maryland.gov/",
        "twitter": "@MDHealthDept",
        "name": "Maryland",
    },
    {
        "state": "ME",
        "covid19Site": "https://www.maine.gov/dhhs/mecdc/infectious-disease/epi/airborne/coronavirus/data.shtml",
        "twitter": "@mainedhhs",
        "name": "Maine",
    },
    {
        "state": "MI",
        "covid19Site": "https://www.michigan.gov/coronavirus/0,9753,7-406-98163_98173---,00.html",
        "twitter": "@MichiganHHS",
        "name": "Michigan",
    },
    {
        "state": "MN",
        "covid19Site": "https://www.health.state.mn.us/diseases/coronavirus/situation.html",
        "twitter": "@mnhealth",
        "name": "Minnesota",
    },
    {
        "state": "MO",
        "covid19Site": "https://showmestrong.mo.gov/data/statewide-public-health/",
        "twitter": "@HealthyLivingMo",
        "name": "Missouri",
    },
    {
        "state": "MS",
        "covid19Site": "https://msdh.ms.gov/msdhsite/_static/14,0,420.html",
        "twitter": "@msdh",
        "name": "Mississippi",
    },
    {
        "state": "MT",
        "covid19Site": "https://montana.maps.arcgis.com/apps/MapSeries/index.html?appid=7c34f3412536439491adcc2103421d4b",
        "twitter": "@dphhsmt",
        "name": "Montana",
    },
    {
        "state": "NC",
        "covid19Site": "https://www.ncdhhs.gov/covid-19-case-count-nc",
        "twitter": "@ncdhhs",
        "name": "North Carolina",
    },
    {
        "state": "ND",
        "covid19Site": "https://www.health.nd.gov/diseases-conditions/coronavirus/north-dakota-coronavirus-cases",
        "twitter": "@NDDOH",
        "name": "North Dakota",
    },
    {
        "state": "NE",
        "covid19Site": "https://experience.arcgis.com/experience/ece0db09da4d4ca68252c3967aa1e9dd",
        "twitter": "@NEDHHS",
        "name": "Nebraska",
    },
    {
        "state": "NH",
        "covid19Site": "https://www.dhhs.nh.gov/dphs/cdcs/2019-ncov.htm",
        "twitter": "@NHPubHealth",
        "name": "New Hampshire",
    },
    {
        "state": "NJ",
        "covid19Site": "https://covid19.nj.gov/#live-updates",
        "twitter": "@NJDeptofHealth",
        "name": "New Jersey",
    },
    {
        "state": "NM",
        "covid19Site": "https://cvprovider.nmhealth.org/public-dashboard.html",
        "twitter": "@NMDOH",
        "name": "New Mexico",
    },
    {
        "state": "NV",
        "covid19Site": "https://app.powerbigov.us/view?r=eyJrIjoiMjA2ZThiOWUtM2FlNS00MGY5LWFmYjUtNmQwNTQ3Nzg5N2I2IiwidCI6ImU0YTM0MGU2LWI4OWUtNGU2OC04ZWFhLTE1NDRkMjcwMzk4MCJ9",
        "twitter": "@dhhsnevada",
        "name": "Nevada",
    },
    {
        "state": "NY",
        "covid19Site": "https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases",
        "twitter": "@healthnygov",
        "name": "New York",
    },
    {
        "state": "OH",
        "covid19Site": "https://coronavirus.ohio.gov/wps/portal/gov/covid-19/dashboards/overview/",
        "twitter": "@OHdeptofhealth",
        "name": "Ohio",
    },
    {
        "state": "OK",
        "covid19Site": "https://oklahoma.gov/covid19.html",
        "twitter": "@HealthyOklahoma",
        "name": "Oklahoma",
    },
    {
        "state": "OR",
        "covid19Site": "https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx",
        "twitter": "@OHAOregon",
        "name": "Oregon",
    },
    {
        "state": "PA",
        "covid19Site": "https://www.health.pa.gov/topics/disease/coronavirus/Pages/Cases.aspx",
        "twitter": "@PAHealthDept",
        "name": "Pennsylvania",
    },
    {
        "state": "PR",
        "covid19Site": "https://services5.arcgis.com/klquQoHA0q9zjblu/ArcGIS/rest/services/Datos_Totales_View7/FeatureServer/0/query?where=1%3D1&outFields=T_Muertes_COVID_RD%2CT_Fatalidades%2CT_Muertes_Combinadas%2CT_Pacientes_Int_Covid%2CT_Vent_Covid%2CT_Serologicos_Pos%2CT_Casos_Unicos%2CT_Molecular_Pos%2CT_Fatalidades%2CT_Hospitalizados%2CT_Recuperados",
        "twitter": "@desaludpr",
        "name": "Puerto Rico",
    },
    {
        "state": "RI",
        "covid19Site": "https://health.ri.gov/data/covid-19/",
        "twitter": "@rihealth",
        "name": "Rhode Island",
    },
    {
        "state": "SC",
        "covid19Site": "https://scdhec.gov/health/infectious-diseases/viruses/coronavirus-disease-2019-covid-19/monitoring-testing-covid-19",
        "twitter": "@scdhec",
        "name": "South Carolina",
    },
    {
        "state": "SD",
        "covid19Site": "https://doh.sd.gov/COVID/Dashboard.aspx",
        "twitter": "@SDDOH",
        "name": "South Dakota",
    },
    {
        "state": "TN",
        "covid19Site": "https://www.tn.gov/health/cedep/ncov.html",
        "twitter": "@TNDeptofHealth",
        "name": "Tennessee",
    },
    {
        "state": "TX",
        "covid19Site": "https://txdshs.maps.arcgis.com/apps/opsdashboard/index.html#/ed483ecd702b4298ab01e8b9cafc8b83",
        "twitter": "@TexasDSHS",
        "name": "Texas",
    },
    {
        "state": "UT",
        "covid19Site": "https://coronavirus-dashboard.utah.gov/",
        "twitter": "@utahdepofhealth",
        "name": "Utah",
    },
    {
        "state": "VA",
        "covid19Site": "https://www.vdh.virginia.gov/coronavirus/covid-19-in-virginia/",
        "twitter": "@vdhgov",
        "name": "Virginia",
    },
    {
        "state": "VI",
        "covid19Site": "https://doh.vi.gov/covid19usvi",
        "twitter": "@usvidoh",
        "name": "US Virgin Islands",
    },
    {
        "state": "VT",
        "covid19Site": "https://experience.arcgis.com/experience/85f43bd849e743cb957993a545d17170",
        "twitter": "@healthvermont",
        "name": "Vermont",
    },
    {
        "state": "WA",
        "covid19Site": "https://www.doh.wa.gov/Emergencies/NovelCoronavirusOutbreak2020COVID19/DataDashboard",
        "twitter": "@WADeptHealth",
        "name": "Washington",
    },
    {
        "state": "WI",
        "covid19Site": "https://www.dhs.wisconsin.gov/covid-19/data.htm",
        "twitter": "@DHSWI",
        "name": "Wisconsin",
    },
    {
        "state": "WV",
        "covid19Site": "https://dhhr.wv.gov/Coronavirus%20Disease-COVID-19/Pages/default.aspx",
        "twitter": "@WV_DHHR",
        "name": "West Virginia",
    },
    {
        "state": "WY",
        "covid19Site": "https://health.wyo.gov/publichealth/infectious-disease-epidemiology-unit/disease/novel-coronavirus/",
        "twitter": "@health_wyoming",
        "name": "Wyoming",
    }
]

$('#modalSave').on('click', (event) => {
    event.preventDefault();
    const searchKeyword = localStorage.getItem('userVaxInfo');
    // console.log(searchKeyword);
    var searchResult = secondaryInfo.filter(word => word.state.indexOf(searchKeyword) >= 0);
    console.log(searchResult)

    var siteReturn = searchResult[0].covid19Site;
    var twitterReturn = searchResult[0].twitter;
    console.log(twitterReturn)
    var nameReturn = searchResult[0].name;

    const name = document.querySelector('.secondaryInfo');
    const twitter = document.querySelector('.secondaryTwitter');
    console.log(twitter)
    const site = document.querySelector('.secondarySite');

    site.textContent = `Website: ${siteReturn}`;
    twitter.textContent = `Twitter Handle: ${twitterReturn}`;
    name.textContent = `${nameReturn}`;

})