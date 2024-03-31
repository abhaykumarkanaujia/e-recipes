import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import RecipeDetails from './components/RecipeDetails';
import RecipeState from './context/recipes/RecipeState';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <RecipeState>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route exact path='/' element={
              <Home />} />
            <Route exact path='/RecipeDetails' element={
              <RecipeDetails />} />
          </Routes>
        </BrowserRouter>
      </RecipeState>
    </>
  );
}

export default App;
