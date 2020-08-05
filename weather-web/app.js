const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const forecastLocation = require('./utils/forecastLocation')

const location = process.argv[2]

if (!location) {
    console.log('Please provide a location!')
} else {
    forecastLocation(location, (error, data) => {
        if (error) {
            return console.log(error)
        } else {
            console.log('Location:', data.location)
            console.log('Country:', data.country)
            console.log('Temperature:', data.temp)
        }
    })
}

// first, retrieve the latitude and longitude of location, then pass to the forecast
// geocode(location, (error, geoData) => {

//     if (error) {
//         return console.log(error)
//     } else {
//         console.log('Error', error)
//         console.log('Data', geoData)

//         forecast(geoData.latitude, geoData.longitude, (error, forecastData) => {
            
//             if (error) {
//                 return console.log(error)
//             } else {
//                 console.log(geoData.location)
//                 console.log(forecastData)
//             }
            
//         })
//     }
// })

// or, use the location directly pass into the forecastLocation function
// forecastLocation(location, (error, data) => {

//     if (error) {
//         return console.log(error)
//     } else {
//         console.log('Location:', data.location)
//         console.log('Country:', data.country)
//         console.log('Temperature:', data.temp)
//     }

// })

