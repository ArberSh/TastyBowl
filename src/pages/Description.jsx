import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Description.css'
import axios from 'axios';

function Description() {
    const [posts, setPosts] = useState([]);
    const { food } = useParams();

    useEffect(() => {
        async function fetchFood() {
          try {
            const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`);
            setPosts(data.meals[0]);
          } catch (error) {
            console.log('Error', error);
          }
        }
        fetchFood();
      }, [food]);

      const [Ingredients, setingredients] = useState();
    for (let i = 1; i < 20; i++){
      console.log("hello")
    }
      useEffect(() => {
        console.log(posts);
    }, [posts]);
    
    
  return (
    <div className='ContainerDescription'>
        <div className='Container_Up'>
            <h1 className='titleFood'>{posts.strMeal}</h1>
            <div className='row'>
                <img style={{marginRight:"10rem"}} className='FoodImg' src={`${posts.strMealThumb}`}></img>
                <div className='Ingredients' >
                <h2>Ingredients</h2>
                <ul >
                    <li>{posts.strIngredient}</li>
                </ul></div>
            </div>
        </div>
        <div className='Container_Down'>
        <div className='Steps'>
            <h3>Instructions</h3>
            <p className='Instruction'>{posts.strInstructions}</p>
        </div>
</div> 
    </div>
  )
}

export default Description
