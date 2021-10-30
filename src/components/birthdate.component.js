import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Birthdate extends Component {
  render() {
    return (
      <form>
        <h2>Microsoft</h2>
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
          <div className="testd d-inline p-1">
          <select class="form-control-sub  position-relative" aria-label=".form-select-lg example">
            <option selected>Month</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          </div>
          <div className="testd d-inline p-1">
          <select class="form-control-sub  position-relative" aria-label=".form-select-lg example">
            <option selected>Day</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          </div>
          <div className="testd d-inline p-1">
          <select class="form-control-sub  position-relative" aria-label=".form-select-lg example">
            <option selected>Year</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          </div>
        </div>
       
        <button type="button" class="btn btn-primary float-right">Next</button>
      </form>
    );
  }
}
