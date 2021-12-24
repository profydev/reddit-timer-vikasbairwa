import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Heatmap from './components/Heatmap';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <div className="hero">
        <Navbar />
        <Header />
        <Heatmap />
      </div>
      <Footer />
    </>
  );
}

export default App;
