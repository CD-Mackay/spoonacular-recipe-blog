import React from 'react';

export default function RecipeShow(props) {
const displayedRecipes = props.recipes.map(recipe => {
  return <ul><li>{recipe.title}</li></ul>
})
  return (
    <div>
    <button onClick={props.showRecipes} >Clickme!</button>
    <div>{displayedRecipes}</div>
    </div>
  )
}