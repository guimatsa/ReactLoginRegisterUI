import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Email extends Component {
    render() {
        return (
            <form>
                <h2>Microsoft</h2>
                <div className="form-group">
                    <label className="sign_in">Create account</label>
                    <input type="email" className="form-control" placeholder="someone@example.com" />
                </div>
                <div className="form-group">
                    <p class="create_account"><Link> <a>Use a phone number instead</a> </Link> </p>
                    <p class="create_account"><Link> <a>Get a new email address</a> </Link> </p>
                </div>
                <button type="button" class="btn btn-primary float-right">Next</button>
            </form>
        );
    }
}
