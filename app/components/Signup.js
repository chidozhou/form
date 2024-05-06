import React, { Component } from "react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";

export default class Signup extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    id: "",
    company: "",
    address: "",
    clientuser: "",
  };

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      id,
      company,
      address,
      clientuser,
    } = this.state;
    const values = {
      firstName,
      lastName,
      email,
      phoneNumber,
      id,
      company,
      address,
      clientuser,
    };

    switch (step) {
      case 1:
        return (
          <FirstPage
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <SecondPage
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      // never forget the default case, otherwise VS code would be mad!

      // do nothing
    }
  }
}
