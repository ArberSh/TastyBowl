import React from 'react'

function Food({posts}) {
    console.log(posts.strMeal)
  return (
    <div>
        <div className='Food_Container'>
            <div className='Food_Image'>
                <img src={posts.strMealThumb} alt='Food'></img>
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