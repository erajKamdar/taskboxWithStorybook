import React from 'react'
import { useSelector } from 'react-redux'
import { rootState } from '../../store'
import { TaskList } from '../taskList/TaskList'

export const TaskScreen = () => {
    const tasks : any = useSelector((state: rootState) => state.tasks )
    
    return (
        <div>
            <TaskList tasks={tasks} loading={false} />
        </div>
    )
}
