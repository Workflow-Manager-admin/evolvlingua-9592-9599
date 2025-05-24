import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">🌍</span> EvolvLingua
            </div>
            <div className="nav-links">
              <a href="#about" className="nav-link">About</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="hero">
            <div className="subtitle">Spanish Learning Application</div>
            
            <h1 className="title">Learn Spanish with EvolvLingua</h1>
            
            <div className="description">
              Interactive lessons and quizzes to help you learn Spanish from beginner to intermediate level.
              Progress at your own pace and track your learning journey.
            </div>
          </div>
          
          <MainContainer />
        </div>
      </main>
    </div>
  );
}

export default App;
