import React from "react";
import {BrowserRouter as Router } from 'react-router-dom';
import CriateRouter from "./CriateRouter";

const App=()=>{
  return(
    <Router>
      {<CriateRouter />}
    </Router>
  );
};

export default App;
