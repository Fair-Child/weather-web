const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=1dd6355046295a9a2b056b726f08ac0d&query=37.8267,-122.4233&units=m'

// request({url: url, json: true}, (error, response) => {
//     if (error) {
//         console.log("Unable to connect to the weather service")
//     } else if (response.body.error) {
//         console.log(response.body.error.info)
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + ' ' + response.body.current.temperature + ' degrees.')
//     }
    
// })



const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/toronto.json?access_token=pk.eyJ1IjoiYnJlbnRsaWFuZyIsImEiOiJja2QzaWt2enMwNWNqMnhvZDQzNGJjbHpyIn0.QRdAa4F7GGPFm_26QIQ6sA&limit=1'

request({url: geocodeURL, json: true}, (error, response) => {
    if (error) {
        console.log("Unable to connect to the location services.")
    } else if (response.body.message === "Not Found") {
        console.log("Unable to find location. Try another search.")
    } else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude, longitude)
    }
    
})