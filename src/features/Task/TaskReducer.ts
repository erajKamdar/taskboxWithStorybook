import { createSlice } from "@reduxjs/toolkit";

interface Tasks {
    pinned: boolean
    archived: boolean
    title: string
}

const taskSlice = createSlice({
    name: 'task',
    initialState: [
        {title: "Task 1", pinned: false, archived: false},
        {title: "Task 2", pinned: false, archived: false},
        {title: "Task 3", pinned: false, archived: false},
        {title: "Task 4", pinned: false, archived: false},
        {title: "Task 5", pinned: false, archived: false},
        {title: "Archived Task", pinned: false, archived: true},
        {title: "Task 6", pinned: false, archived: false},
        {title: "Pinned Task", pinned: true, archived: false},
        {title: "Archived & Pinned Task", pinned: true, archived: true},

    ] as Tasks[],
    reducers: { }
})

export default taskSlice.reducer