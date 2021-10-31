import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Password extends Component {
    render() {
        return (
            <form>
                <h2>Microsoft</h2>
                <div className="form-group">
                    <p class="create_account "> User Email </p>
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
                        <label class ="form-check-label" for="flexCheckDefault">
                        Show password
                        </label>
                    </div>


                </div>
                <button 
                type="button" 
                class="btn btn-primary float-right">Next</button>
            </form>
        );
    }
}
