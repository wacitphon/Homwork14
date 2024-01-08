import React, { useState } from 'react';
import TodoContainer from './TodoContainer';

function TodoItem(props) {
  const { job, onDelete, onUpdate } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(job.todo);
  const [isChecked, setIsChecked] = useState(job.completed);

  const handleDelete = () => {
    onDelete(job.id);
  };

  const handleUpdate = () => {
    onUpdate(job.id, updatedText);
    setIsEditing(false);
  };

  const handleCheckboxChange = () => {
    onUpdate(job.id, job.todo, !isChecked);
    setIsChecked(!isChecked);
  };

  return (
    <div className={`todo-item ${isChecked ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="btn-group">
          <input
            type="text"
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
          />
          <button className='button' onClick={handleUpdate}>Save</button>
          <button className='button2' onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div className="btn-group">
          <p>{job.todo}</p>
          <div className="btn-group">
            <button className='button2' onClick={() => onDelete(job.id)}>Delete</button>
            <button className='button' onClick={() => setIsEditing(true)}>Edit</button>
            <label className="container">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;