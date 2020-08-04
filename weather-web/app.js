const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')





geocode('Toronto', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

forecast(43.6529, -79.3849, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})