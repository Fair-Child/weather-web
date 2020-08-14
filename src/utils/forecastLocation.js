const request = require('request')

const forecastLocation = (location, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=1dd6355046295a9a2b056b726f08ac0d&query=' + location + '&units=m'

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to the weather servers!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {

            callback(undefined, {
                forecastData: response.body.current.weather_descriptions[0] + ' ' 
                            + response.body.current.temperature + ' degree celsius, feels like ' 
                            + response.body.current.feelslike + " degree celsius, uv index: " 
                            + response.body.current.uv_index,
                location: response.body.location.name + ', ' 
                            + response.body.location.region + ', ' 
                            + response.body.location.country
        })

            // callback(undefined, {
            //     location: response.body.location.name,
            //     region: response.body.location.region,
            //     country: response.body.location.country,
            //     temp: response.body.current.weather_descriptions[0] + ' ' + response.body.current.temperature + ' degrees.'
            
            // })
        }
    })
}

module.exports = forecastLocation