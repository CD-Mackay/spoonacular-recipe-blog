import React, { useState } from 'react';

export default function RecipeShow(props) {
const [display, setDisplay] = useState([]);

function showRecipe() {
  let shown = props.getByIngredient('bananas');
  setDisplay([shown])
}

const displayedRecipes = props.recipes.map(recipe => {
  return <ul><li>{recipe.title}</li></ul>
})


  return (
    <div>
      <form autoComplete='off' onSubmit={event => event.preventDefault()}>
        <label for="ingredients">What do you have too much of?</label>
        <select name="ingredients" id="ingredients">
          <option value="apples">Apples</option>
          <option value="bananas">Bananas</option>
          <option value="kale">Kale</option>
        </select>
    <button type="submit" onClick={showRecipe} >Submit</button>
    </form>
    {/* <div>{displayedRecipes}</div> */}
    </div>
  )
}