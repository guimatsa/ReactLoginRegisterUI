import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SignIn extends Component {
    render() {
        return (
            <form>
                <h2>Microsoft</h2>
                <div className="form-group">
                    <label className="sign_in">Sign in</label>
                    <input type="email" className="form-control" placeholder="Email, Phone or Skipe" />
                </div>
                <div className="form-group">
                    <p class="create_account"> No account?<Link> <a>   Create one! </a> </Link> </p>
                </div>
                <button type="button" class="btn btn-primary float-right">Next</button>
            </form>
        );
    }
}
