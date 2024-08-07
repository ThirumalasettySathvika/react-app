// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from 'src/components/Home';
import About from 'src/components/About';
import DisplayAllItems from 'src/components/DisplayAllItems';
import AddNewItem from 'src/components/AddNewItem';
import UpdateItem from 'src/components/UpdateItem';
import Contact from 'src/components/Contact';
import 'src/App.css'; // Import the CSS file

const App = () => {
  return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Pizza Store</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/items">All Items</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add">Add New Item</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container mt-3">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/items" component={DisplayAllItems} />
            <Route path="/add" component={AddNewItem} />
            <Route path="/update/:id" component={UpdateItem} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
  );
};

export default App;
