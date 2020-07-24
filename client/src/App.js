import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  // Switch,
  // Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import SignUp from "./components/SignUp";
import About from "./components/About";
import Posting from "./components/PostingPage";
import Footer from "./components/Footer";
import User from "./components/User";
import ProtectedRoute from "./components/ProtectedRoute";
import SignUpIn from "./components/Tabs";
import Inventory from "./components/Inventory";
import { user as userAPI } from "./utils/API";

function App() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [alertInfo, setAlertInfo] = useState({ message: "", theme: "success" });

  useEffect(() => {
    // only setting user if we got one, to avoid rerendering the page.
    userAPI
      .authenticate()
      .then((res) => (res.data ? setUser(res.data) : 0))
      // repress the authenticate route error if recieved one.
      .catch((e) => console.log(e));
  }, []);

  return (
    <Router>
      <div>
        <Route
          render={(props) => (
            <Navbar user={user} setUser={setUser} {...props} />
          )}
        />
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/inventory"
          render={(props) => (
            <Inventory
              {...props}
              user={user}
              setUser={setUser}
              setLoading={setLoading}
              setAlertInfo={setAlertInfo}
            />
          )}
          {...{ user, setUser, setLoading, setAlertInfo }}
        />
        <Route
          exact
          path="/signup"
          render={(props) => (
            <SignUpIn
              {...props}
              user={user}
              setUser={setUser}
              setLoading={setLoading}
              setAlertInfo={setAlertInfo}
            />
          )}
          {...{ user, setUser, setLoading, setAlertInfo }}
        />
        <Route exact path="/about" component={About} />
        <Route
          exact
          path="/posting"
          render={(props) => (
            <Posting
              {...props}
              user={user}
              setUser={setUser}
              setLoading={setLoading}
              setAlertInfo={setAlertInfo}
            />
          )}
          {...{ user, setUser, setLoading, setAlertInfo }}
        />
        <Route
          exact
          path="/user"
          render={(props) => (
            <User
              {...props}
              user={user}
              setUser={setUser}
              setLoading={setLoading}
              setAlertInfo={setAlertInfo}
            />
          )}
          {...{ user, setUser, setLoading, setAlertInfo }}
        />
        <ProtectedRoute
          exact
          path="/user"
          {...{ user, setLoading, Component: User }}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
