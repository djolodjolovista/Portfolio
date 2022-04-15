import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Homescreen from './screens/Homescreen';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Homescreen />} />
      </Routes>
    </Router>
  );
}

export default App;
