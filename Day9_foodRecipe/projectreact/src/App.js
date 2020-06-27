import React, {useEffect, useState} from "react";
import Recipe from './Recipe';
import "./App.css";

const App = () => {
  const APP_ID = "23f8d4eb";
  const APP_key = "4fd0ab5d5520729e4b22a932b9144f9e";
  //const APP_url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_key}`;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getRecepies();
  }, []);

  const getRecepies = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=steak&app_id=${APP_ID}&app_key=${APP_key}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  return (
    <div className="App">
      <form className = "search-form">
        <input className = "search-bar" type="text" value = {search}/>
        <button className = "search-button" type = "submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe
        title = {recipe.recipe.label}
        calories = {recipe.recipe.calories}
        image = {recipe.recipe.image}
        />
      ))};
    </div>
  );
};
export default App;
