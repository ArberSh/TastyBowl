import React, { useEffect, useState } from 'react';
import './Results.css';
import axios from 'axios';
import Food from '../components/Food';
import { useParams } from 'react-router-dom';

function Results() {
  const [posts, setPosts] = useState([]);

    const {term } = useParams()
    console.log(term)

  useEffect(() => {
    async function fetchFood() {
      try {
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
          setPosts(data.meals);
          posts.map((element) => {console.log(element)})
      } catch (error) {
        console.log('Error', error);
      }
    }
    fetchFood()
  }, [term]);

  useEffect(() => {
    // Logging inside the useEffect to see the updated state
    console.log(posts);
  }, [posts])

  return (
    <div className='Container'>
      {posts.map((posts) => {<Food posts={posts}/>})}
    </div>
  );
}

export default Results;
