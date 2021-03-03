import { useEffect } from 'react';
const axios = require('axios');



axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_KEY}`)
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(process.env)
  console.log(error);
})


function recipes() {
  return axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.local.API_KEY}`)
  .catch(error => console.log(error));
}


export default { recipes }