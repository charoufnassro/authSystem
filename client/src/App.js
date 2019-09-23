import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Admin from './components/admin/Admin';
import Login from './components/login/Login';
import Home from './components/home/Home';


const App = () => {
  
  return (
    <Router>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/admin" exact component={Admin} />
    </Router>
  )
}

export default App
