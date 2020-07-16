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
              ? <Component {...{user}} />
              : loading === true 
                  ? <></>
                  : <Redirect to="/user" />
          }}
      />
   )
}

export default ProtectedRoute;

// ? <Component {...{user}} />