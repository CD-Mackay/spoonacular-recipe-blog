import { useEffect, useState } from 'react';
const axios = require('axios');


const useApplicationData = () => {

const [recipes, setRecipes] = useState([]);

useEffect(() => { 
axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}`)
.then(function (response) {
  console.log(response.data.results);
  setRecipes(response.data.results);
  console.log("recipes", recipes);
})
.catch(function (error) {
  console.log(process.env.REACT_APP_API_KEY)
  console.log(error);
})
}, []);


function showRecipes() {
  axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}`)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
}

return { showRecipes, recipes }
}

export default useApplicationData;