import './App.css';
import Nav from './pages/Nav'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Results from './pages/Results';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/search' element={<Results/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
