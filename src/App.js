import logo from './logo.svg';
import useApplicationData from './hooks/useApplicationData';
import RecipeShow from './Components/Recipes';
import dotenv from 'dotenv';
import './App.css';



const App = () => {

  const { showRecipes, recipes, getByIngredient } = useApplicationData();

  return (
    <div className="App">
      <RecipeShow recipes={showRecipes} recipes={recipes} getByIngredient={getByIngredient} />
    </div>
  );
}

export default App;
