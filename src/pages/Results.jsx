import React, { useEffect, useState } from 'react';
import './Results.css';
import axios from 'axios'

function Results() {
    const [posts,setPosts] = useState([]);
   
    useEffect(() => {
        async function fetchFood() {
            try{
            const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
            setPosts(data)  
            console.log(data)     
        }
        catch(error) {
            console.log("Error" , error)
        }
        }
        fetchFood()
    },[]);

    // console.log(posts)
    return (
        <div className='Container'>
        <div className='Food_Container'>
            <div className='Food_Image'>
                <img src='https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg' alt='Food'></img>
            </div>
            <div className='SmallDescription'>
                <h2>{posts}
                </h2>
            </div>
        </div>
    </div>  
    );
}

export default Results;
