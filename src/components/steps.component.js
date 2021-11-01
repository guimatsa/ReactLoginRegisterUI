import React, { useState } from "react";

import { Link } from "react-router-dom";

class MasterForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      email: '',
      userName: '',
      userSname: '',
      password: '',
      userCountry: '',
      userDateOfBirth: ''
    }
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { email, userName, password, userSname, userCountry, userDateOfBirth } = this.state
    alert(`Your registration detail: \n 
             Email: ${email} \n 
             UserName: ${userName} \n
             userSname: ${userSname} \n
             userCountry: ${userCountry} \n
             userDateOfBirth: ${userDateOfBirth} \n
             Password: ${password}`)

  }

  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 3 ? 4 : currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  /*
  * the functions for our button
  */
  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button" onClick={this._prev}>
          Previous
        </button>
      )
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 4) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button" onClick={this._next}>
          Next
        </button>
      )
    }
    return null;
  }

  render() {

    return (
      <React.Fragment>

        <h2>Microsoft</h2>

        <form onSubmit={this.handleSubmit}>
          {/* 
          render the form steps and pass required props in
        */}

          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            password={this.state.password}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            userName={this.state.userName}
            userSname={this.state.userSname}
          />
          <Step4
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            userSname={this.state.userSname}
            userCountry={this.state.userCountry}
            userDateOfBirth={this.state.userDateOfBirth}
          />
          {this.previousButton()}
          {this.nextButton()}

        </form>
      </React.Fragment>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  }
  return (
    <form>
      <div className="form-group">
        <p>  </p>
        <label htmlFor="email" className="sign_in">Create account</label>
        <input type="email" id="email" name="email" className="form-control" placeholder="someone@example.com"  />
      </div>
      <div className="form-group">
        <p class="create_account"><Link> <a>Use a phone number instead</a> </Link> </p>
        <p class="create_account"><Link> <a>Get a new email address</a> </Link> </p>
      </div>
    </form>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  }
  return (
    <form>
      <div className="form-group">
        <p class="create_account "> hey  {props.email} </p>
        <label className="sign_in">Create a password</label>
        <p class="create_account"> Enter the password you would like to use with your account. </p>
        <input
          type="password"
          className="form-control"
          placeholder="Create password"
        />
      </div>
      <div className="form-group">

        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox" value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Show password
          </label>
        </div>


      </div>
    </form>
  );
}



function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  }
  return (
    <React.Fragment>
      <div className="form-group">
        <p class="create_account "> User Email </p>
        <label className="sign_in">Info</label>
        <p class="create_account"> We need just a little more info to set up your account.</p>
        <input type="text" className="form-control" placeholder="First name" />

        <input type="text" className="form-control" placeholder="Last name" />
      </div>
    </React.Fragment>
  );
}

function Step4(props) {
  if (props.currentStep !== 4) {
    return null
  }
  return (
    <React.Fragment>
      <div className="form-group">
        <p class="create_account "> User Email</p>
        <label className="sign_in">What's your birthdate?</label>
        <p class="create_account"> We need just a little more info to set up your account. Your date of birth helps us to provide you with age-appropriate settings. </p>

        <label className="sign_in">Country/region</label> <br />

        <select class="form-control" aria-label=".form-select-lg example">
          <option selected>Select your country</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select> <br />
        <label className="sign_in">Birthdate</label> <br />

        <div className=" d-inline p-1">
          <select class="form-control-sub  position-relative" aria-label=".form-select-lg example">
            <option selected>Month</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div className=" d-inline p-1">
          <select class="form-control-sub  position-relative" aria-label=".form-select-lg example">
            <option selected>Day</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div className=" d-inline p-1">
          <select class="form-control-sub  position-relative" aria-label=".form-select-lg example">
            <option selected>Year</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <button className="btn btn-success btn-block">Sign up</button>
    </React.Fragment>
  );
}
/*
ReactDOM.render(<MasterForm />, document.getElementById('root'))
*/
export default MasterForm;