import React, { useState } from 'react';
import AddTask from './addTask';
import TaskList from './Tasklist';
import './style/list-item.css';

function ToDoList() {
  const [tasks, setTasks] = useState(["Breakfast", "Lunch"]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="to-do-list">
      <AddTask
        newTask={newTask}
        handleInputChange={handleInputChange}
        addTask={addTask}
      />
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onMoveTaskUp={moveTaskUp}
        onMoveTaskDown={moveTaskDown}
      />
    </div>
  );
}

export default ToDoList;
