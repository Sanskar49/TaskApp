import React from 'react'

const Buttons = ({color,text}) => {
    return (
        <div>
        <button style={{backgroundColor: color}} className='btn'>{text}</button>
            
        </div>
    )
}

export default Buttons
