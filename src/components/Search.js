import React, { useContext, useState } from 'react';
import RecipeContext from '../context/recipes/RecipeContext';


const Search = () => {
    const context = useContext(RecipeContext);
    const [query, setquery] = useState("Mango");
    const { getQueries, setLoading } = context;
    // eslint-disable-next-line
    const getRecipes = async () => {
        await getQueries(query);
    }

    const OnClick = (e) => {
        e.preventDefault();
        setLoading(true);
        getRecipes();
    }

    const OnChange = (e) => {
        setquery(e.target.value);
    }

    return (
        <>
            <div className=''>
                <form onSubmit={OnClick} className="d-flex justify-content-between" role="search">
                    <input className="form-control me-1" onChange={OnChange} value={query} id='search' type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" id='search' type="submit">Search</button>
                </form>
            </div>
        </>
    )
}

export default Search