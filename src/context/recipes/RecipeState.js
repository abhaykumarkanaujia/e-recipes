import React, { useState } from 'react';
import RecipeContext from './RecipeContext';

const RecipeState = (props) => {
    const APP_ID = process.env.REACT_APP_API_ID;
    const APP_KEY = process.env.REACT_APP_API_KEY;
    const [loading, setLoading] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const getQueries = async (query) => {
        const data = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const recipes = await data.json();
        setLoading(false);
        setRecipes(recipes.hits);
    }
    return (
        <RecipeContext.Provider value={{ getQueries, recipes, loading, setLoading }}>
            {props.children}
        </RecipeContext.Provider>
    )
}

export default RecipeState;