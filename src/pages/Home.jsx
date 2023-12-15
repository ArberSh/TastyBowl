import React, { useState,useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [Input, SetInput] = useState('');
 
  const Click = () => {
    console.log(Input);
  };

  const [food,setFood] = useState('')

  useEffect(() => {
    async function fetchRandomFood() {
      try {
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`);
        setFood(data.meals[0]);
      } catch (error) {
        console.log('Error', error);
      }
    }
    fetchRandomFood();
  }, []);

  useEffect(() => {
    console.log(food.strMeal);
  }, [food]);

 const foodName = food.strMeal

  return (
    <div className='Home'>
      <h1>Find a recipe</h1>
      <p className='Description__Home'>
        Find <span>+10,000 good & delicious</span> recipe and start your amazing journey healthy food with us
      </p>

      <input value={Input} onChange={(e) => SetInput(e.target.value)} placeholder='Search for a recipe'></input>
      <div className='SearchBar'>
      <Link to={`/search/${Input}`}>
          <button onClick={Click}>Search it!</button>
        </Link>
        <Link to={`/description/${foodName}`}>
        <button style={{ marginLeft: '4vw' }} onClick={Click}>
          Random Food
        </button></Link>
      </div>
    </div>
  );
}

export default Home;
