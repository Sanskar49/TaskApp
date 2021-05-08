import React from 'react'
import '../index.css'
import Buttons from './Buttons'

const Header = ({title}) => {
    return (
        //Way of using inline style in React
        // <div style={{color: 'red', backgroundColor: 'black'}}>
        <header className='header'>
        <h1>{title}</h1>
        <Buttons text='Add' color='steelblue' />
            
        </header>
    )
}

export default Header

