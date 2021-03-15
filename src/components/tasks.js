import { useState } from 'react'
import Task from './task'

const Tasks = ({tasks}) => {
    return ( 
        <>
            {tasks.map((task) => (
                <Task key ={task.id} task = {task.name}></Task>
            ))}
        </>
    )
}

export default Tasks