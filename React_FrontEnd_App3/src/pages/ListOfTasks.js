import React, { useState } from 'react';

const ListOfTasks = ({ tasks, onUpdate, onDelete }) => {
    const [editingId, setEditingId] = useState(null);
    const [editForm, setEditForm] = useState({ title: '', time: '' });

    const startEdit = (task) => {
        setEditingId(task._id);
        setEditForm({ title: task.title, time: task.time });
    };

    const handleEditChange = (e) => {
        setEditForm({
            ...editForm,
            [e.target.name]: e.target.value
        });
    };

    const handleEditSubmit = async (taskId) => {
        await onUpdate(taskId, editForm);
        setEditingId(null);
    };

    const handleToggleComplete = async (task) => {
        await onUpdate(task._id, { completed: !task.completed });
    };

    if (tasks.length === 0) {
        return (
            <div className="empty-state">
                <i className="bi bi-clipboard"></i>
                <p>No tasks yet. Add your first task!</p>
            </div>
        );
    }

    return (
        <div className="tasks-list">
            {tasks.map((task) => (
                <div key={task._id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                    {editingId === task._id ? (
                        <div className="task-edit-form">
                            <input
                                type="text"
                                className="edit-input"
                                name="title"
                                value={editForm.title}
                                onChange={handleEditChange}
                                placeholder="Task title"
                            />
                            <input
                                type="text"
                                className="edit-input"
                                name="time"
                                value={editForm.time}
                                onChange={handleEditChange}
                                placeholder="Time"
                            />
                            <div className="edit-actions">
                                <button 
                                    className="save-btn"
                                    onClick={() => handleEditSubmit(task._id)}
                                >
                                    <i className="bi bi-check"></i> Save
                                </button>
                                <button 
                                    className="cancel-edit-btn"
                                    onClick={() => setEditingId(null)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="task-content">
                                <input
                                    type="checkbox"
                                    className="task-checkbox"
                                    checked={task.completed}
                                    onChange={() => handleToggleComplete(task)}
                                />
                                <div className="task-info">
                                    <h6 className="task-title">{task.title}</h6>
                                    <span className="task-time">
                                        <i className="bi bi-clock"></i> {task.time}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="task-actions">
                                <button 
                                    className="action-btn edit"
                                    onClick={() => startEdit(task)}
                                >
                                    <i className="bi bi-pencil"></i>
                                </button>
                                <button 
                                    className="action-btn delete"
                                    onClick={() => onDelete(task._id)}
                                >
                                    <i className="bi bi-trash"></i>
                                </button>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ListOfTasks;
