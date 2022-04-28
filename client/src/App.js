import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Aboutscreen from './screens/Aboutscreen';
import Contactscreen from './screens/Contactscreen';
import Homescreen from './screens/Homescreen';
import Loginscreen from './screens/Loginscreen';
import Projectsscreen from './screens/Projectsscreen';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Homescreen />} />
        <Route path='/about' element={<Aboutscreen />} />
        <Route path='/projects' element={<Projectsscreen />} />
        <Route path='/contact' element={<Contactscreen />} />
        <Route path='/account' element={<Loginscreen />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
