import trashIcon from './assets/trash_icon.svg';
import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

class App extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
      tasks: [],
      newTask: '',
    };
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  addTask = (e) => {
    e.preventDefault();
    const task = {
      id: Date.now(),
      text: this.state.newTask,
      completed: false,
    };
    this.setState({
      tasks: [task, ...this.state.tasks],
      newTask: '',
    }, () => this.inputRef.current.focus());
  };

  completeTask = (id) => {
    this.setState({
      tasks: this.state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    });
    setTimeout(() => {
      this.setState({
        tasks: this.state.tasks.filter((task) => task.id !== id),
      });
    }, 4000);
  };

  deleteTask = (id) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== id),
    });
  };

  render() {
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
            <h2 className='cardtitle'>Task List</h2>
            <div className="inputdiv">
              <form onSubmit={this.addTask}>
                <input
                  ref={this.inputRef}
                  type="text"
                  name="task"
                  placeholder="Enter a new task"
                  value={this.state.newTask}
                  onChange={(e) => this.setState({ newTask: e.target.value })}
                />
                <button
                  type="submit"
                  disabled={this.state.newTask.trim() === ''}
                  style={{ backgroundColor: this.state.newTask.trim() === '' ? 'gray' : 'blue' }}
                >
                  Create
                </button>
              </form>
            </div>
            <div className='tasklistdiv'>
              {this.state.tasks.length > 0 ? (
                this.state.tasks.map((task) => (
                  // Task div -- I had to divide in divs to align items
                  <div key={task.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Div with checkbox */}
                    <div className='checkboxdiv'>
                      <input className='inputcheckbox'
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => this.completeTask(task.id)}
                      />
                    </div>

                    {/* Div with the task text */}
                    <div className='divwithtext' style={{ flexGrow: 1, textAlign: 'left' }}>
                      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        {task.text}
                      </span>
                    </div>

                    {/* Div with the trash button */}
                    <div className='divwithtrashbutton'>
                      <button className="trashbutton" onClick={() => this.deleteTask(task.id)}>
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
          I also used the theme from the template because it looks cool<br />
          I created the template with <code>npm create vite@latest my-react-app -- --template react</code>
        </p>
        <p className="read-the-docs">
          My mind is blown with Vite + React, it's really cool!
        </p>
      </>
    );
  }
}

export default App;