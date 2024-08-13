import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home'
import About from './Components/About';

function App() {
  return (
    
      <Router>

          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <Header />
                  <Home />
                </> 
              }
            />

            <Route 
              path="/about" 
              element={ 
                <> 
                  <Header />
                  <About />
                </> 
              } 
            />

          </Routes>
      </Router>
  )
}

export default App;
