import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Hotels from './pages/Hotels/Hotels';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes> {/* before v16 React was Switch */}
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/hotels" element={<Hotels/>} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
