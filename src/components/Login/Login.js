import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [user, setUser] = useState({});
  var provider = new firebase.auth.GoogleAuthProvider();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        setUser(user);
        setLoggedInUser(user);
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage, email);
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <br />
      <h2>Current Email: {loggedInUser.email}</h2>
      <br />
      <Button
        onClick={handleGoogleSignIn}
        style={{}}
        variant="primary"
        size="lg"
        block
      >
        Login With Google
      </Button>
      <img
        src="https://image.freepik.com/free-vector/login-concept-illustration_114360-739.jpg"
        alt=""
      />
    </div>
  );
};

export default Login;
