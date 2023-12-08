import React from 'react'

function Food({element}) {
    console.log(element.strMeal)
  return (
    <div>
        <div className='Food_Container'>
            <div className='Food_Image'>
                <img src='https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg' alt='Food'></img>
            </div>
            <div className='SmallDescription'>
                <h2>{element.strMeal}
                </h2>
            </div>
        </div>
    </div>
  )
}

export default Food