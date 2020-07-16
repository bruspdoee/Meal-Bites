import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import validateUser from "../../utils/validateUser";

// prettier-ignore
const ProtectedRoute = ({ Component, loading, user }) => {
   return(
      <Route
          render={ () => {
             const loggedIn = validateUser(user)
            return loggedIn
              ? <Redirect to="/user" />
              : loading === true 
                  ? <></>
                  : <Redirect to="/" />
          }}
      />
   )
}

export default ProtectedRoute;

// ? <Component {...{user}} />