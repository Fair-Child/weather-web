const request = require('request')
const geocode = require('./utils/geocode')

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




geocode('Toronto', (error, data) => {

    console.log('Error', error)
    console.log('Data', data)

})
