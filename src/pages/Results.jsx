import React, { useEffect, useState } from 'react';
import './Results.css';
import axios from 'axios'
import Food from '../components/Food';

function Results(term) {
    const [posts,setPosts] = useState([]);
   
    useEffect(() => {
        async function fetchFood() {
            try{
            const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
            setPosts(data.meals[0])  
        }
        catch(error) {
            console.log("Error" , error)
        }
        }
        fetchFood()
    },[]);

    console.log(posts.strMeal)
    return (
        <div className='Container'>
       <Food posts={posts}/>
       <Food posts={posts}/>
       <Food posts={posts}/>
    </div>  
    );
}

export default Results;
