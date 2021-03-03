import React from 'react';

export default function RecipeShow(props) {

  function displayRecipes() {
    let recipes = props.recipes();
    console.log(recipes);
  }
  return (
    <button onClick={displayRecipes}>Clickme!</button>
  )
}