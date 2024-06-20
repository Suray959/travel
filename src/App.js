import './App.css';
import Header from '../src/./Compnents/./Header/Header';
import Home from '../src/./Compnents/pages/./Home/Home';
import Footer from './Compnents/Footer/Footer';
import About from '../src/./Compnents/./pages/./About/About'
import Popular from '../src/Compnents/pages/Popular/Popular'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../src/./Compnents/./Layout/Layout';
import Ticket from '../src/./Compnents/./pages/./Ticket/Ticket'
import videoBg from '../src/./Compnents/./image/videoBg.mp4'
import Sign from './Compnents/pages/Sign/Sign';


function App() {
  return (

    <div className="App">
        <video src={videoBg} autoPlay loop muted />
        <div className="content">

        <Router>
        <Layout>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/' element={<About/>} />
            <Route path='/Ticket' element={<Ticket />} />
            <Route path='/popular' element={<Popular />} />
            <Route path='/sign' element={< Sign/>} />
          </Routes>
        </Layout>
      </Router>
        </div>
    
    </div>
  );
}

export default App;
