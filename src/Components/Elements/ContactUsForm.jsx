import React, { Component } from "react";
import "../../Styles/Elements/ContactUsForm.css";

class ContactUsForm extends Component {
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
      <div className="formContainer container-lg ">
        <br />
        <div class="row text-center justify-content-center">
          <div class="col-12 col-md-9 col-lg-7">
            <h1 className="contactTitle">Contact Us</h1>
            <p className="text-h3">
              Questions? We would love to hear from you!
            </p>
            <form className="formStyles" onSubmit={this.handleSubmit}>
              <label>
                Full Name:
                <br />
                <input
                  className="inputSize form-control"
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <label>
                Email:
                <br />
                <input
                  className="inputSize form-control"
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <label>
                Your Message:
                <br />
                <textarea
                  className="textbox form-control-fluid"
                  type="textarea"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <label>
                <input
                  className="contactBtn btn-lg btn-primary"
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

export default ContactUsForm;
