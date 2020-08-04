const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=1dd6355046295a9a2b056b726f08ac0d&query=' + latitude + ',' + longitude + '&units=m'

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to the weather services!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + ' ' + response.body.current.temperature + ' degrees.')
        }
    })
}

module.exports = forecast