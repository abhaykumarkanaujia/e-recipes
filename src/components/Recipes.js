import React, { useContext } from 'react';
import RecipeContext from '../context/recipes/RecipeContext';
import RecipeItem from './RecipeItem';

const Recipes = () => {
  const context = useContext(RecipeContext);
  const { recipes } = context;

  return (
    <>
      
      <div className='row'>
        {recipes?.length > 0? recipes.map((recipe) => {
          return <RecipeItem key={recipe.recipe.url} recipe={recipe.recipe} />
        }): <div className='container mt-5 pt-5 text-center'><h3>Click Search Button to See Amazing Recipes!!</h3></div>}
      </div>

    </>
  )
}

export default Recipes;