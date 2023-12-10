import React from 'react'
import { useParams } from 'react-router-dom';
import './Description.css'

function Description() {
    const { food } = useParams();
  console.log(food);
  return (
    <div className='ContainerDescription'>
        <div className='Container_Left'>
        <h1 className='titleFood'>{food}</h1>
        <img className='imageFood'></img>
        </div>
        <div className='Container_Right'>
            <div className='Guide'>
                <div className='Ingredients'>
                    LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
                </div>
                <div className='Steps'>
                            JFSNDFJNDFJNSFJRJFNRJNEJFNEJFNEJFNWEJFNJNFJENFJEN
                </div>
            </div>
        </div>
    </div>
  )
}

export default Description