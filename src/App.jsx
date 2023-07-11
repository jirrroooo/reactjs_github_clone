import React from 'react';
import Issues from './Issues';
import {Link, Route, BrowserRouter as Router, Routes, Switch} from 'react-router-dom';
import Details from './Details';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>

      <div className="container">

        <Routes>
            <Route exact path="/" element={<Issues />}/>
            <Route exact path="/issues/:id" element={<Details />}/>
        </Routes>

        <Issues />
      </div>
    </Router>
  );
}

export default App;
