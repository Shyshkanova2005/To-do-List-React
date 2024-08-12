import React, { useState } from 'react';
import './style/addTask.css'; 

function AddTask({defaultTask, handleInputChange, addTask }) {
return (
    <div>
      <input
        type="text"
        placeholder="Enter a task..."
        value={defaultTask}
        onChange={handleInputChange}
      />
      <button className="add-button" onClick={addTask}>
        Add
      </button>
    </div>

);

}
export default AddTask;