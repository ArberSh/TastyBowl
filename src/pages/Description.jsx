import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Description.css'
import axios from 'axios';

function Description() {
    const [posts, setPosts] = useState([]);
    const [ingredients, setIngredients] = useState([]);
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

    
      useEffect(() => {
        if(posts && posts.strIngredient1) {
            const newIngredients = []
            for (let i = 1;i <= 20; i++){
              const ingredient = posts[`strIngredient${i}`]
              if (ingredient) {
                newIngredients.push(ingredient)
              } else {
                break
              }
            }
            setIngredients(newIngredients)
          console.log(ingredients)
        }
    }, [posts]);
    
    
  return (
    <div className='ContainerDescription'>
        <div className='Container_Up'>
            <h1 className='titleFood'>{posts.strMeal}</h1>
            <div className='row'>
                <img style={{marginRight:"10rem"}} className='FoodImg' src={`${posts.strMealThumb}`}></img>
                <div className='Ingredients' >
                <h2 className='IngredientsTitle'>Ingredients</h2>
                <ul >
                  {ingredients.map((ingredients,index)=>(
                    <li key={index}>{ingredients}</li>
                  ))}
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
