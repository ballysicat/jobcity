import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import JobList from "./pages/JobList";
import Seeker from "./pages/Seeker";
import Employer from "./pages/Employer";
import About from "./pages/About";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<JobList />} />
          <Route path="/seeker" element={<Seeker />} />
          <Route path="/employer" element={<Employer />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
