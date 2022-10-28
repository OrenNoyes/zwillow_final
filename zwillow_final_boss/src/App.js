import React from "react";
import Header from "./components/Header";
import PropPage from "./components/PropPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropContact from "./components/PropContact";
import PropAbout from "./components/PropAbout";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element= {<PropPage/>}/>
          <Route path="/about" element= {<PropAbout/>}/>
          <Route path= "/contact" element= {<PropContact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
