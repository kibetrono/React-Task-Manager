import React from 'react'
import {FaTimes}  from 'react-icons/fa'

const Task = ({task,onDelete}) => {
  return (
    <div className="taskList">
      <h3 className='one_task'>{task.text} <FaTimes style={{color:'red',cursor:'pointer'}} onClick={()=>onDelete(task.id)}/> </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
