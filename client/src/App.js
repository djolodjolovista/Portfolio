import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Aboutscreen from './screens/Aboutscreen';
import Homescreen from './screens/Homescreen';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Homescreen />} />
        <Route path='/about' element={<Aboutscreen />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
