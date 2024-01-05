import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MoodTrack from './pages/MoodTrack';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="moodtrack" element={<MoodTrack />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
