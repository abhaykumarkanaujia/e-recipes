import React from 'react';
import { useNavigate } from 'react-router-dom';

const RecipeItem = (props) => {
  const { recipe } = props;
  const navigate = useNavigate();

  const OnClick = ()=>{
    navigate("/RecipeDetails", {state: {recipe: recipe}});
  }
  
  return (
    <>
      <div onClick={OnClick} className='d-flex my-2 justify-content-center col-md-3'>
        <div className="card">
          <img src={recipe.image} className="card-img-top object-fit-cover" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{recipe.label}</h5>
            <p className="card-text">Recipe By {recipe.source}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecipeItem;