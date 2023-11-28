import React, { useState } from 'react'
import './Home.css'
import SearchIcon from '@mui/icons-material/Search';


function Home() {

  const [Input,SetInput] = useState("");

  const Click = (e) => {
    console.log(Input)
  } 
  
  return (
    <div className='Home'>
      <h1>Find a recipe</h1>
      <p className='Description__Home'>Find <span>+10,000 good & delicious</span> recipe and start your amazing journey healthy food with us</p>
      
        <input value={Input} onChange={(e) => SetInput(e.target.value)} placeholder='Search for a recipe'></input>
     <div className='SearchBar'>
      <button onClick={Click}>Search it!</button>
      <button style={{marginLeft:'4vw'}} onClick={Click}>Random Food</button>
      </div>
    </div>
  )
}

export default Home