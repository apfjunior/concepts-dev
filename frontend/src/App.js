import React, { useState }from 'react';

import './App.css';
import backgroundImage from './assets/harley.jpg'

import Header from './components/Header';

function App() {
  const [projects, setProject] = useState(['Desenvolvimento app', 'frontend web']);
  
  function handleAddProject() {
    setProject([...projects, `Novo projeto ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Projects" />
      
      <img width={300} src={backgroundImage} />
        <ul>
          {projects.map(project => <li key={project}>{project}</li>)}
        </ul> 

        <button type="button" onClick={handleAddProject}>Add</button>
    </>
  );
};

export default App;