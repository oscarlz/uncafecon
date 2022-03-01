import React from 'react';
import './App.css';
import Navbar from  './components/layout/Navbar';
import Humans from './components/cafes/Humans';
import SearchPartner from './components/cafes/SearchPartner';
import HumansState from './context/humans/HumansState';
import CafemMeetingDate from './components/cafes/CafemMeetingDate';

function App() {
  return (
    <HumansState>
      <div className="App">
        <Navbar />
        <div className="container">
          <SearchPartner />
          <Humans />
          <CafemMeetingDate />
        </div>

      </div>
    </HumansState>
  );
}

export default App;
