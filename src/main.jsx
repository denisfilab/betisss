import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import BoatList from './BoatList.jsx';
import './index.css';
import AddBoatForm from './Form.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AddBoatForm />
      <BoatList />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);



