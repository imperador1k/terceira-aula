 import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './components/Student'
import StudentManager from './components/StudentManager'


function App() {

  // state variable
  const [taskInput, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = () => {

    if(taskInput == '') {
      alert('Please insert a valid task');
      return;
    }

    let taskAux = [...taskList];
    taskAux.push(taskInput);

    setTaskList(taskAux);
    setTaskInput('');
  }

  const taskListHtml = taskList.map(task =>
    <li> {taskInput} </li>
  );

  return (
    <>
    <h1>Put a Task here:</h1>
    <br />
      <input
        value={taskInput}
        onChange={(evt) => setTask(evt.target.value)}
      />
      <br/>
      <br/>

      <button onClick={() => handleAddTask()}>
        Add Task
      </button>

      <br />
      <br />

      <h3>Task List:</h3>

      <ul>
        {taskListHtml}
      </ul>
  
    </>
  )
}

export default App
