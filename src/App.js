import React from 'react';
import './App.css';
import Home from './views/home/home.jsx';
import Footer from './components/footer/footer.jsx';
import Header from './components/header/header.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
