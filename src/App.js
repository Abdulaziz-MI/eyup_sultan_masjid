import './App.css';
import Home from './containers/HomeContainer';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from "./components/Navbar";
import FAQ from './components/FAQ';
import Location from './components/Location';
import './components/Contact.css'


export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <FAQ />
      <Location />
      <Contact />
    </>
  );
}


