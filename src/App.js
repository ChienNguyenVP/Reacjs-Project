import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TableTask from './components/TableTask';

function App() {
  return (
    <div className="container-fluid"> 
    <h3>The First Project</h3>
      <Header/>
      <TableTask/>
      </div >
      );
}

export default App;
