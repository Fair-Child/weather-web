const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=1dd6355046295a9a2b056b726f08ac0d&query=37.8267,-122.4233'

request({url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})