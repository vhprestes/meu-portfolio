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
import { useState, useEffect } from 'react';


function App() {
  const [currentComponent, setCurrentComponent] = useState('main');


  useEffect(() => {
    const storedComponent = localStorage.getItem('currentComponent');
    if (storedComponent) {
      setCurrentComponent(storedComponent);
    }
  });

  const handleComponentChange = (component) => {
    console.log(`Changing component to ${component}`);
    setCurrentComponent(component);
    localStorage.setItem('currentComponent', component);
  };

  return (
    <div className="App">
      <Header handleComponentChange={handleComponentChange} />
      {currentComponent === 'main' && <Main handleComponentChange={handleComponentChange} />}
      {currentComponent === 'projects' && <Portfolio  handleComponentChange={handleComponentChange} />}
      {currentComponent === 'about' && <About  handleComponentChange={handleComponentChange} />}
      {currentComponent === 'contact' && <Contact  handleComponentChange={handleComponentChange}/>}

      
      <Footer />
    </div>
  );
}

export default App;
