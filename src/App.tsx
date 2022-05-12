import React from 'react';
import './App.css';

import { Link, Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h1>adu</h1>
      <nav style={{borderBottom : '1px solid',paddingBottom : '1rem'}}>
        <Link to="invoices" >invoices</Link> |{' '}
        <Link to="expenses"  >expenses</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;