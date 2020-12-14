import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './features/Task/TaskReducer'

export const store =  configureStore({
    reducer: {
        tasks: taskReducer
    }
})

export type rootState = ReturnType<typeof store.getState>