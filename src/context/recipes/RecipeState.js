import React, { useState } from 'react';
import RecipeContext from './RecipeContext';

const RecipeState = (props) => {
    const APP_ID = process.env.REACT_APP_API_ID;
    const APP_KEY = process.env.REACT_APP_API_KEY;
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const getQueries = async (query) => {
        setQuery(query);
        console.log(APP_KEY);
        const data = await fetch(url);
        const recipes = await data.json();
        setRecipes(recipes.hits);
    }
    return (
        <RecipeContext.Provider value={{ getQueries, recipes }}>
            {props.children}
        </RecipeContext.Provider>
    )
}

export default RecipeState;