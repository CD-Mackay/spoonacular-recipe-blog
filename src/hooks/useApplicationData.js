import { useEffect } from 'react';
const axios = require('axios');


const useApplicationData = () => {



axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}`)
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(process.env.REACT_APP_API_KEY)
  console.log(error);
})


function recipes() {
  return axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}`)
  .catch(error => console.log(error));
}

return { recipes }
}

export default useApplicationData;