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
            setPosts(data[0].meals);
          } catch (error) {
            console.log('Error', error);
          }
        }
        fetchFood();
      }, [food]);

      useEffect(() => {
        console.log(posts);
      }, [posts]);

  return (
    <div className='ContainerDescription'>
        <div className='Container_Left'>
        <h1 className='titleFood'>{posts[0].strMeal}</h1>
        <img className='imageFood'>{posts[0].strMealThumb}</img>
        </div>
        <div className='Container_Right'>
            <div className='Guide'>
                <div className='Ingredients'>
                    <h3>Ingredients</h3>
                </div>
                <div className='Steps'>
                    <h3>Steps</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Description