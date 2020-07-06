import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import DashBoard from "./components/dashboard.component";

firebase.initializeApp({
  apiKey: "<FireBasse API Key>",
  authDomain: "<authentication domain from firebase>",
});

class App extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
    });
  };

  render() {
    let isemailexist = false;
    if (firebase.auth().currentUser !== null ? true : false) {
      isemailexist = firebase.auth().currentUser.email !== null ? true : false;
    }
    let emailAddress = <div></div>;
    if (isemailexist) {
      emailAddress = (
        <h3 style={{ fontWeight: "lighter" }}>
          Email : {firebase.auth().currentUser.email}
        </h3>
      );
    }
    return (
      <React.Fragment>
        <div className="App">
          {this.state.isSignedIn ? (
            <DashBoard
              firebase_object={firebase.auth()}
              email={emailAddress}
            ></DashBoard>
          ) : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )}
        </div>
        <div align="left" className="static_part">
          <span className="dot"></span>&emsp;
          <span className="dot"></span>
          <br></br>
          <span className="dot"></span>&emsp;
          <span className="dot"></span>
          <span
            style={{
              fontWeight: "bolder",
              color: "#ffffff",
              fontSize: "20px",
              marginLeft: "100px",
            }}
          >
            aiyou
          </span>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
