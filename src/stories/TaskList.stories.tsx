import React from 'react'
import { TaskList } from "../components/taskList/TaskList";

const exportingTaskList = {
    title: 'Task List',
    component: TaskList
};

export default exportingTaskList;

const tasks = [
    { title: "Task 1", pinned: false, archived: false },
    { title: "Task 2", pinned: false, archived: false },
    { title: "Task 3", pinned: false, archived: false },
    { title: "Task 4", pinned: false, archived: false },
    { title: "Task 5", pinned: false, archived: false },
    { title: "Task 6", pinned: false, archived: false },
    { title: "Task 7", pinned: false, archived: false },
    { title: "Pinned Task", pinned: true, archived: false },
    { title: "Archived & Pinned Task", pinned: true, archived: true },
    { title: "Archived Task", pinned: false, archived: true },
]

export const DefaultList = () => {
    return <TaskList tasks={tasks} loading={false} />
}

export const LoadingList = () => {
    return <TaskList tasks={[]} loading={true} />
}

export const PinnedList = () => {
    const new_tasks = [
        { title: "Pinned Task", pinned: true, archived: false },
        { title: "Archived & Pinned Task", pinned: true, archived: true },
    ]
    return (
        <TaskList tasks={new_tasks} loading={false} />
    )
}

export const ArchivedList = () => {
    const new_tasks = [
        { title: "Archived Task", pinned: false, archived: true },
        { title: "Archived & Pinned Task", pinned: true, archived: true },

    ]
    return (
        <TaskList tasks={new_tasks} loading={false} />
    )
}


export const EmptyList = () => {
    return <TaskList tasks={[]} loading={false} />
}