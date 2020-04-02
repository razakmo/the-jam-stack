const axios = require('axios');
require('dotenv').config()

 var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          `apiKey=${process.env.API_KEY}` + '&pageSize=5';

module.exports = async function () {
    try {
        const response = await axios.get(url)
        return response.data;
    } catch (err) {
        console.error(err)
    }
}