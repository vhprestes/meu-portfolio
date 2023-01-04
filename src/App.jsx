import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Pages/Main';
import Header from './Components/Header';
import Footer from './Components/Footer';
// import Title from './Components/Title'
// import Button from './Components/Button'
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import About from './Pages/About';
import { useState } from 'react';


function App() {
  const [currentComponent, setCurrentComponent] = useState('main');

  const handleComponentChange = (component) => {
    setCurrentComponent(component);
  };

  return (
    <div className="App">
      <Header setCurrentComponent={setCurrentComponent} />
      {currentComponent === 'main' && <Main handleComponentChange={handleComponentChange} />}
      {currentComponent === 'projects' && <Portfolio />}
      {currentComponent === 'about' && <About />}
      {currentComponent === 'contact' && <Contact />}

      
      <Footer />
    </div>
  );
}

export default App;
