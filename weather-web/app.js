const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=1dd6355046295a9a2b056b726f08ac0d&query=37.8267,-122.4233&units=m'

request({url: url, json: true}, (error, response) => {
    console.log(response.body.current.weather_descriptions[0] + ' ' + response.body.current.temperature + ' degrees.')
})