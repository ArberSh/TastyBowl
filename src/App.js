import './App.css';
import Nav from './pages/Nav'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Results from './pages/Results';
import Description from './pages/Description';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/search/:term' element={<Results/>}/>
      <Route path='/description/:food' element={<Description/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
