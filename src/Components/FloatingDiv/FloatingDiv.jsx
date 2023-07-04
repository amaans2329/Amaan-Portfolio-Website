import React from 'react'
import './FloatingDiv.css';

const FloatingDiv = ({image,txt1,txt2}) => {
  return (
    <div className='floatingdiv'>
        <img src={image} alt="Not Found" />
        <span>
           {txt1} 
           <br/> 
           {txt2}
        </span>      
    </div>
  )
}

export default FloatingDiv;