import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import About from "./components/About";
import Posting from "./components/PostingPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/about" component={About} />
        <Route exact path="/posting" component={Posting} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
