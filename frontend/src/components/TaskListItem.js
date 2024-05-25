// src/components/TaskListItem.js
import React from 'react';
import { Link } from 'react-router-dom';
import { deleteTask } from '../api';

const TaskListItem = ({ task, onDelete }) => {
console.log(task)
  return (
    <div className="border rounded-md p-4 mb-4 flex justify-between items-center">
      <div>
        <div className='flex items-center gap-4 justify-between'>
        <h3 className="text-lg font-bold">{task.title}</h3>
        <span className="text-sm">{task.status}</span>
        </div>
        <p className="text-sm">{task.description}</p>
        <p className="text-sm">{task.dueDate.slice(0,10)}</p>
      </div>
      <div className="flex space-x-2">
        <Link to={`/edit/${task._id}`} className="text-blue-500 hover:underline">Edit</Link>
        <button
          onClick={() => deleteTask(task._id).then(onDelete)}
          className="text-red-500 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskListItem;
