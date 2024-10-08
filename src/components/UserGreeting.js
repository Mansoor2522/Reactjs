import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
 return this.state.isLoggedIn && <div>Welcome Mansoor Ahmed</div>

    // return this.state.isLoggedIn ? (
    //   <div>Welcome Guest</div>
    // ) : (
    //   <div>Welcome Mansoor Ahmed</div>
    // );

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Mansoor Ahmed</div>
    // } else {
    //   message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Mansoor Ahmed</div>;
    // } else {
    //   <div>Welcome Guest</div>;
    // }

    // return (
    //   <div>
    //   <div>Welcome Mansoor Ahmed</div>
    //   <div>Welcome Guest</div>
    //   </div>
    // )
  }
}
export default UserGreeting;
