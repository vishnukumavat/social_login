import React, { Component } from "react";
import "../App.css";

class DashBoard extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <div className="content_holder">
            Static &emsp; Content
            <img
              className="profile_image"
              alt="profile picture"
              align="right"
              src={this.props.firebase_object.currentUser.photoURL}
            />
            <h3>
              <b style={{ fontWeight: "bolder" }}>Hello</b>,{" "}
              <span style={{ fontWeight: "lighter" }}>
                {this.props.firebase_object.currentUser.displayName}
              </span>
            </h3>
            {this.props.email}
          </div>
          <button
            className="btn btn-danger signout"
            onClick={() => this.props.firebase_object.signOut()}
          >
            Sign out!
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default DashBoard;
