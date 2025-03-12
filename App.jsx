import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";        // Correct Path
import Events from "./pages/Events";    // Correct Path
import Navbar from "./components/Navbar"; // Correct Path

function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
