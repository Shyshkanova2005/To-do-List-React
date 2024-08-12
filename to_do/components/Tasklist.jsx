import React from 'react';
import Action from './actionButtons';

function TaskList({ tasks, onDeleteTask, onMoveTaskUp, onMoveTaskDown }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <Action 
          key={index} 
          task={task} 
          index={index} 
          deleteTask={onDeleteTask} 
          moveTaskUp={onMoveTaskUp} 
          moveTaskDown={onMoveTaskDown} 
        />
      ))}
    </ul>
  );
}

export default TaskList;
