const request = require('request')



const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=16b4ef6f854bc7e4dc2bbe37e613c510&query=' + latitude + ',' + longitude + '&units=f'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            console.log('Unable to connect to weather service!')
        } else if (response.body.error) {
            console.log('Unable to find location')
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + '. It is current ' + response.body.current.temperature + ' degress out. There is a ' + response.body.current.feelslike + '% chance of rain.')
        }
    })
}

module.exports = forecast