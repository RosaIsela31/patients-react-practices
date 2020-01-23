import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Patients from './component/Patients';

import './index.css';


function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Patients} />
    </BrowserRouter>
  );
}

export default App;
