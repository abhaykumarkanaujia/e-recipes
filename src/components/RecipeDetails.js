import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const RecipeDetails = () => {
    const location = useLocation();
    const { recipe } = location.state;
    const { ingredients, image, label, source, url, digest } = recipe;

    useEffect(() => {
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className='container mt-5 pt-5'>
                <div>
                    <div className='d-flex row justify-content-between'>

                        <div className='d-flex container flex-row align-self-start col-md-8'>
                            <img src={image} className='align-self-start col-md-6' alt='not available' />
                            <div className='mx-4'>
                                <h3>{label}</h3>
                                <hr/>
                                <h4>From: {source}</h4>
                                <Link to={url}><h5>Click here for detailed Recipe</h5></Link>
                                <div className='mt-4'>
                                    <table className='table table-primary table-bordered border-primary table-striped table-striped-columns'>
                                        <thead><th scope="col">Ingredient</th><th scope="col">Quantity</th><th scope="col">Measure</th></thead>
                                        <tbody>{ingredients.map((ingredient) => {
                                            return <tr key={ingredient.food}><th>{ingredient.food}</th> <td>{ingredient.quantity}</td> <td>{ingredient.measure}</td></tr>
                                        })}</tbody>
                                    </table>
                                </div>
                            </div>
                        </div>


                        <div className='col-md-4'>
                            <div>
                                <table className='table table-secondary table-bordered table-striped table-striped-columns'>
                                    <thead><th scope="col">Ingredient</th><th scope="col">Quantity</th><th scope="col">Unit</th></thead>
                                    <tbody>{digest.map((label) => {
                                        return <tr key={label.label}><th scope='row'>{label.label}</th><td>{parseInt(label.total)}</td><td>{label.unit}</td></tr>
                                    })}</tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default RecipeDetails;