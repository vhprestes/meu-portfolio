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

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
