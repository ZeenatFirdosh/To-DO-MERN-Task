// src/pages/TaskFormPage.js
import React from 'react';
import TaskForm from '../components/TaskForm';

const TaskFormPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Create or Edit Task</h1>
      <TaskForm />
    </div>
  );
};

export default TaskFormPage;
