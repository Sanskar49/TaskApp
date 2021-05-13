import React from 'react'
import '../index.css'
import Buttons from './Buttons'

const Header = ({title, toggleAdd}) => {
    return (
        //Way of using inline style in React
        // <div style={{color: 'red', backgroundColor: 'black'}}>
        <header className='header'>
        <h1>{title}</h1>
        <Buttons color="steelblue" text="Add" onClick={toggleAdd}  />
            
        </header>
    )
}

export default Header

