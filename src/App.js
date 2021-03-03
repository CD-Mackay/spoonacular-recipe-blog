import logo from './logo.svg';
import useApplicationData from './hooks/useApplicationData';
import RecipeShow from './Components/Recipes';
import dotenv from 'dotenv';
import './App.css';



const App = () => {

  const { recipes } = useApplicationData();

  return (
    <div className="App">
      <RecipeShow recipes={recipes} />
    </div>
  );
}

export default App;
