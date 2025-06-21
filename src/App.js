import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Component } from "react";
import Home from "./components/Home";
import Caretaker from "./components/Caretaker";
import Patient from "./components/Patient";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/patient" element={<Patient />} />
          <Route exact path="/caretaker" element={<Caretaker />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
