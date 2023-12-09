import React, { useEffect, useState } from 'react';
import './Results.css';
import axios from 'axios';
import Food from '../components/Food';
import { useParams } from 'react-router-dom';

function Results() {
  const [posts, setPosts] = useState([]);

  const { term } = useParams();
  console.log(term);

  useEffect(() => {
    async function fetchFood() {
      try {
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
        setPosts(data.meals);
      } catch (error) {
        console.log('Error', error);
      }
    }
    fetchFood();
  }, [term]);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <div className='Container'>
      {posts.map((element) => (
        <Food key={element.idMeal} posts={element} />
      ))}
    </div>
  );
}

export default Results;
