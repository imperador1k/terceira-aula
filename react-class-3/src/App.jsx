import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './components/Student'

function App() {

  // Data could be from a API/DataBase
  const listStudents = [
    { name: 'Paulo', age: 20 },
    { name: 'Diogo', age: 19 },
    { name: 'Test', age: 0 }
  ];

  // variable that will contain HTML that we will show in the screen
  let listStudentsHtml = [];

  // for each element of listStudents, we will create a Student
  listStudents.forEach((student) => {
    listStudentsHtml.push(
      <>
        <Student name={student.name} age={student.age} />
        <br />
      </>
    ); 
  });

  return (
    <>
      Hello class 3
      <br></br>Students list: <br />
      {listStudentsHtml}
    </>
  )
}

export default App
