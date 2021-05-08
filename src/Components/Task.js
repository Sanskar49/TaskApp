import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete}) => {
    return (
        <div className='task'>
        <h3>
        {task.text}
        {/* onDelete prop is passing the specefic id to the deleteTask function which resides on App.js */}
        <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)}/> 
        </h3>
        <p>{task.day}</p>
            
        </div>
    )
}

export default Task
