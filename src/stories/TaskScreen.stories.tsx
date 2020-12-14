import React from 'react';
import { Provider } from 'react-redux';
import { TaskScreen } from '../components/TaskScreens/TaskScreen';
import { store } from '../store';

const exportingTaskScreen = {
  title: 'Task Screen',
  component: TaskScreen,
  decorators: [(story: any)=> <Provider store={store}>{story()}</Provider>], 

};

export default exportingTaskScreen;

export const DefaultScreen = () => {
  return <TaskScreen  />;
};

