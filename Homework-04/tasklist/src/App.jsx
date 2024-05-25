import React from 'react';
import { useState } from 'react';
import trashIcon from './assets/trash_icon.svg';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const inputRef = React.createRef();

  function addTask(e) {
    e.preventDefault();
    const task = { id: Date.now(), text: newTask, completed: false };
    setTasks([...tasks, task]);
    setNewTask('');
    inputRef.current.focus();
  }

  function completeTask(id) {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
    setTimeout(() => {
      setTasks(tasks.filter((task) => task.id !== id));
    }, 4000);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h5>I left the logos here because I thought they were cool</h5>
      <div className="cardcontainer">
        <div className="card">
          <h2 className="cardtitle">Task List</h2>
          <div className="inputdiv">
            <form onSubmit={addTask}>
              <input
                ref={inputRef}
                type="text"
                name="task"
                placeholder="Enter a new task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <button
                type="submit"
                disabled={newTask.trim() === ''}
                style={{ backgroundColor: newTask.trim() === '' ? 'gray' : 'blue' }}
              >
                Create
              </button>
            </form>
          </div>
          <div className="tasklistdiv">
            {tasks.length > 0 ? (
              tasks.map((task) => (
                // Task div -- I had to divide in divs to align items
                <div key={task.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {/* Div with checkbox */}
                  <div className="checkboxdiv">
                    <input
                      className="inputcheckbox"
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => completeTask(task.id)}
                    />
                  </div>

                  {/* Div with the task text */}
                  <div className="divwithtext" style={{ flexGrow: 1, textAlign: 'left' }}>
                    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                      {task.text}
                    </span>
                  </div>

                  {/* Div with the trash button */}
                  <div className="divwithtrashbutton">
                    <button className="trashbutton" onClick={() => deleteTask(task.id)}>
                      <img src={trashIcon} alt="Delete" style={{ width: '20px', height: '20px', backgroundColor: '#888' }} />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <img src="/src/assets/no_tasks.svg" className="notasksimage" alt="No Tasks Yet" />
                <p>No tasks yet!</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <p>
        I also used the theme from the template because it looks cool

        I created the template with <code>npm create vite@latest my-react-app --template react</code>
      </p>
      <p className="read-the-docs">
        It's not rendering the same as the previous homework and I can't figure out why.
      </p>
    </>
  );
}

export default App;