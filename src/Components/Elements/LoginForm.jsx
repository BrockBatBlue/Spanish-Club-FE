import React, { Component } from "react";
import "../../Styles/Elements/LoginForm.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="loginFormContainer container-lg ">
        <br />
        <div class="row text-center justify-content-center">
          <div class="col-12 col-md-9 col-lg-7">
            <h4 className="loginTitle">Please Log in</h4>
            <br />
            <form className="loginFormStyles" onSubmit={this.handleSubmit}>
              <label>
                User Name:
                <br />
                <input
                  className="inputSize form-control"
                  type="username"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <label>
                Password:
                <br />
                <input
                  className="inputSize form-control"
                  type="password"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <label>
                <br />
                <input
                  className="loginBtn btn-lg btn-primary"
                  type="submit"
                  value="Submit"
                />
              </label>
            </form>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default LoginForm;
