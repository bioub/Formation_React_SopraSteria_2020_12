import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    login: "",
    password: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <form className="LoginForm" onSubmit={this.handleSubmit}>
        <div>
          Login :{" "}
          <input type="text" name="login" onChange={this.handleChange} />
        </div>
        <div>
          Password :{" "}
          <input type="password" name="password" onChange={this.handleChange} />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
