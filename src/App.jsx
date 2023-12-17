import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Heading from "./components/Heading";
import Content from "./components/Content";
import Terminals from "./components/Terminals";
import NavigatePage from "./pages/Navigate";
import CreatePage from "./pages/Create";
import MovePage from "./pages/Move";
import "./App.css";

function App() {
  return (
    <Router>
      <Heading />
      <Content />
      <Terminals />
      <Routes>
        <Route path="/pages/Navigate" element={<NavigatePage />} />
        <Route path="/pages/Create" element={<CreatePage />} />
        <Route path="/pages/Move" element={<MovePage />} />
      </Routes>
    </Router>
  );
}

export default App;
