import React from 'react'

function Food({posts}) {
    console.log(posts.strMeal)
  return (
    <div>
        <div className='Food_Container'>
            <div className='Food_Image'>
                <img src='https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg' alt='Food'></img>
            </div>
            <div className='SmallDescription'>
                <h2>{posts.strMeal}
                </h2>
            </div>
        </div>
    </div>
  )
}

export default Food