import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";


export default class Email extends Component {

    constructor (props) {
        super(props)
        this.state = {
            email: ''
        }
        this.handleCHange = this.handleCHange.bind(this)
    }

    handleCHange (e) {
        this.setState({
            email: e.target.value
        })
    }

    render() {
        return (
            <form>
                <h2>Microsoft</h2>
                <div className="form-group">
                    <label htmlFor="email" className="sign_in">Create account</label>
                    <input type="email" id="email" name="email" className="form-control" placeholder="someone@example.com"  value={this.state.email} onChange={this.handleCHange} />
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
