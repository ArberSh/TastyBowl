import React from 'react'
import { Link } from 'react-router-dom'
import Description from '../pages/Description'

function Food({posts}) {
    console.log(posts.strMeal)
  return (
    <div>
        <Link to={`/description/${posts.strMeal}`}>
        <div className='Food_Container'>
            <div className='Food_Image'>
                <img src={posts.strMealThumb} alt='Food'></img>
            </div>
            <div className='SmallDescription'>
                <h2 style={{textDecoration:"none"}}>{posts.strMeal}
                </h2>
            </div>
        </div>
        </Link>
    </div>
  )
}

export default Food