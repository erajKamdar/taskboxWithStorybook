import React from 'react'
import { TaskItem } from "../components/Task/Task"

const exportingTask = { 
    title: 'Task',
    component: TaskItem
};

export default exportingTask;

export const DefaultTask = () => {
    return(
        <TaskItem task={'Default Task'}   pinned={false} archived={false} />
    )
}

export const PinnedTask = () => {
    return(
        <TaskItem task={'Default Task'}  pinned={true} archived={false} />
    )
}

export const ArchivedTask = () => {
    return(
        <TaskItem task={'Default Task'} pinned={false} archived={true} />
    )
}