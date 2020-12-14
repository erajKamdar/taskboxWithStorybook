import React from 'react';
import './App.css';
import { TaskItem } from './components/Task/Task';


function App() {
  return (
    <div className="App">
      <h1>ALL TASKS</h1>
      <TaskItem task={'Task 1'} pinned={false} archived={false} />
      <TaskItem task={'Task 2'} pinned={false} archived={false} />
      <TaskItem task={'Task 3'} pinned={false} archived={false} />
      <TaskItem task={'Task 4'} pinned={false} archived={false} />
      <TaskItem task={'Task 5'} pinned={false} archived={false} />
      <TaskItem task={'Archived Task'} pinned={false} archived={true} />
      <TaskItem task={'Task 6'} pinned={false} archived={false} />
      <TaskItem task={'Pinned Task'} pinned={true} archived={false} />
      <TaskItem task={'Archived & Pinned Task'} pinned={true} archived={true} />

    </div>
  );
}

export default App;
