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
    <div style={{ backgroundColor: 'grey', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div>
      <h2 style={{fontSize:50}}>Todo List</h2>
      <div style={{flexDirection:'row', justifyContent: 'center', display: 'flex', lignItems: 'center'}}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter task"
          style={{height:30,width:200}}
        />
        <FontAwesomeIcon icon={faPlus} style={{height:40}} onClick={handleAddTask} />
      </div>
      </div>
      {tasks.length > 0 && (
        <div >
          <ul>
            {tasks.map((task, index) => (
              <ul key={index}>
                <input
                  type="text"
                  value={task}
                  onChange={(e) => handleEditTask(index, e.target.value)}
                />
                <FontAwesomeIcon icon={faTrashCan} onClick={() => handleDelTask(index)} />
              </ul>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default App;
