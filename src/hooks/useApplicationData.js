const axios = require('axios');



axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`)
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
})