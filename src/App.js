import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import './App.css';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import Hotels from './components/Hotels/Hotels';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />  
        <Header />
        <Routes> {/* before v16 React was Switch */}
          <Route exact path="/" element={<Hotels/>} />
          <Route exact path="/hotels" element={<Hotels/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
