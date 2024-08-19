import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (inputText.trim() !== '') {
      setTasks([...tasks, inputText]);
      setInputText('');
    }
  };

  const handleEditTask = (index, newTask) => {
    // Update the task at the given index with the new value
    const updatedTasks = [...tasks];
    updatedTasks[index] = newTask;
    setTasks(updatedTasks);
  };

  const handleDelTask = (index) => {
    // Create a copy of the tasks array, excluding the task at the given index
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);

    // Update the state with the modified tasks list
    setTasks(updatedTasks);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '20px' }}>Todo List</h2>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter task"
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '200px' }}
          />
          <button style={{ marginLeft: '10px', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={handleAddTask}>
            <FontAwesomeIcon icon={faPlus} style={{ marginRight: '5px' }} />
            Add Task
          </button>
        </div>
        {tasks.length > 0 && (
          <ul style={{ listStyle: 'none', padding: '0', marginTop: '20px' }}>
            {tasks.map((task, index) => (
              <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <input
                  type="text"
                  value={task}
                  onChange={(e) => handleEditTask(index, e.target.value)}
                  style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '5px', width: '150px' }}
                />
                <FontAwesomeIcon icon={faTrashCan} style={{ marginLeft: '10px', color: 'red', cursor: 'pointer' }} onClick={() => handleDelTask(index)} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
