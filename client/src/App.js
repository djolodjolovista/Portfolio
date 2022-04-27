import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Aboutscreen from './screens/Aboutscreen';
import Homescreen from './screens/Homescreen';
import Projectsscreen from './screens/Projectsscreen';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Homescreen />} />
        <Route path='/about' element={<Aboutscreen />} />
        <Route path='/projects' element={<Projectsscreen />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
