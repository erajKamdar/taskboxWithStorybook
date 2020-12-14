import React, { FC } from 'react'
import { TaskItem } from '../Task/Task'
import Skeleton from "@material-ui/lab/Skeleton";


interface Tasks {
    pinned: boolean
    archived: boolean
    title: string
}

interface TaskListProps {
    tasks: Tasks[]
    loading: boolean
}

export const TaskList: FC<TaskListProps> = ({ tasks, loading }) => {

    const sortPinnedTasks = [
        ...tasks.filter(task => task.pinned),
        ...tasks.filter(task => !task.pinned)
    ]

    if(loading){
        return (
            <div>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </div>
        )
    }

    if(tasks.length === 0){
        return <h1>You Have No Tasks!</h1>
    }

    return (
        <div>
            {sortPinnedTasks.map((task : any) => {
                return(
                    <TaskItem task={task.title} pinned={task.pinned} archived={task.archived} />
                )
            })}
        </div>
    )
}
