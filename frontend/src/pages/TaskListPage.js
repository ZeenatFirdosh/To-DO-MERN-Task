// src/pages/TaskListPage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTasks } from '../api';
import TaskListItem from '../components/TaskListItem';

const TaskListPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then((res) => setTasks(res.data));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Task List</h1>
        <Link to="/create" className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-700">Create New Task</Link>
      </div>
      {tasks.map((task) => (
        <TaskListItem key={task._id} task={task} onDelete={() => setTasks(tasks.filter((t) => t._id !== task._id))} />
      ))}
    </div>
  );
};

export default TaskListPage;
