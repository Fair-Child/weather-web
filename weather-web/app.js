const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=1dd6355046295a9a2b056b726f08ac0d&query=37.8267,-122.4233&units=m'

// request({url: url, json: true}, (error, response) => {
//     console.log(response.body.current.weather_descriptions[0] + ' ' + response.body.current.temperature + ' degrees.')
// })

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYnJlbnRsaWFuZyIsImEiOiJja2QzaWt2enMwNWNqMnhvZDQzNGJjbHpyIn0.QRdAa4F7GGPFm_26QIQ6sA&limit=1'

request({url: geocodeURL, json: true}, (error, response) => {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    
    console.log(latitude, longitude)
})