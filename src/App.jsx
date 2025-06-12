import { BrowserRouter as Router, Routes, Route } from "react-router";

// Layout
import Hero from "./layout/Hero";
import Projects from "./layout/Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projetos" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
