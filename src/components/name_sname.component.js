import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Name_Sname extends Component {
    render() {
        return (
            <form>
                <h2>Microsoft</h2>
                <div className="form-group">
                    <p class="create_account "> User Email </p>
                    <label className="sign_in">Info</label>
                    <p class="create_account"> We need just a little more info to set up your account.</p>
                    <input type="text" className="form-control" placeholder="First name" />

                    <input type="text" className="form-control" placeholder="Last name" />
                </div>
              
                <button type="button" class="btn btn-primary float-right">Next</button>
            </form>
        );
    }
}
