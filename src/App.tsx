import React from 'react';
import './App.css';
import Sidebar from './components/Editor/Sidebar/Sidebar';
import Canvas from './components/Editor/Canvas/Canvas';
import TopPanel from './components/Editor/Top-panel/TopPanel';
import Header from './components/Editor/Header/Header';
import Footer from './components/Editor/Footer/Footer';

function App() {

  return (
    <div className="editor">
      <Header />
      <TopPanel></TopPanel>
      <Sidebar></Sidebar>
      <Canvas></Canvas>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
