import React, { useContext, useEffect } from 'react';
import RecipeContext from '../context/recipes/RecipeContext';
import RecipeItem from './RecipeItem';

const Recipes = () => {
  const context = useContext(RecipeContext);
  const { recipes, loading, getQueries, setLoading } = context;

  useEffect(() => {
    setLoading(true);
    getQueries('Mango');
  }, [])
  

  return (
    <>
      
      {loading? <div className='container mt-5 pt-5 text-center'><h4>loading...</h4></div> :<div className='row'>
        {recipes?.length > 0? recipes.map((recipe) => {
          return <RecipeItem key={recipe.recipe.url} recipe={recipe.recipe} />
        }): <div className='container mt-5 pt-5 text-center'><h3>Invalid Search!!</h3></div>}
      </div>}

    </>
  )
}

export default Recipes;