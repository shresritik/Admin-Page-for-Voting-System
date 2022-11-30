import React from "react";
import Dashboard from "./components/Dashboard";
import Candidate from "./components/Candidate";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Sidebar>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/candidate" element={<Candidate />} />
            <Route
              path="/*"
              element={
                <h1 className="mx-auto w-max text-4xl py-4 font-bold">
                  Coming Soon
                </h1>
              }
            />
          </Routes>
        </Sidebar>
      </Router>
    </div>
  );
};

export default App;
