import React from 'react';
import Recipes from './Recipes';
import Search from './Search';

const Home = () => {
  
  return (
    <>
        <div className='mt-3 pt-1 container-fluid'>
          <div className='mt-5 container-fluid'>
            <div className='mr-2 container'>
              <Search/>
            </div><hr/>
            <div className='my-2 container-fluid'>
              <Recipes />
            </div>
          </div>
        </div>
    </>
  )
}

export default Home;