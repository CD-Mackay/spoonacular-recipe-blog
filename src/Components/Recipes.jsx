import React from 'react';

export default function RecipeShow(props) {
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
    <button onClick={props.showRecipes} >Clickme!</button>
    </form>
    <div>{displayedRecipes}</div>
    </div>
  )
}