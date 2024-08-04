import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css'; 


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <Switch>
          <Route path="/" exact component={Home} />
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;
