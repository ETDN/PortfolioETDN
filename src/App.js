import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contactme" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

/*f y'all are attempting this project using react-router-dom v6 you'll have to change 
Switch to Routes and in your Route component you have to change component to element. 
It should look like this -->  <Route path="/" element={<Home />} exact /> <Route path="/signin" element={<SigninPage />} exact /> */
