const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const forecastLocation = require('./utils/forecastLocation')




// first, retrieve the latitude and longitude of location, then pass to the forecast
// geocode('Vancouver', (error, data) => {

//     if (error) {
//         return console.log(error)
//     } else {
//         console.log('Error', error)
//         console.log('Data', data)

//         forecast(data.latitude, data.longitude, (error, data) => {
            
//             if (error) {
//                 return console.log(error)
//             } else {
//                 console.log('Error', error)
//                 console.log('Data', data)
//             }
            
//         })
//     }
// })

// or, use the location directly pass into the forecastLocation function
forecastLocation('Tokyo', (error, data) => {

    if (error) {
        return console.log(error)
    } else {
        console.log('Error', error)
        console.log('Data', data)
    }

})

