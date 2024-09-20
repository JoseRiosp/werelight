import React from 'react'
import { Task } from '../../models/task.class'
import { levels } from '../../models/levels.enum'
import TaskComponent from '../pure/task'



const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, levels.NORMAL)

  return (
    <div>
      <div className='col-12'>
        <div className='card'>
            <div className='card-header p-3'></div>


        </div>

        <h1>Tus tareas: </h1>
      </div>
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  )
}

export default TaskListComponent
