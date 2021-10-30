import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Verify extends Component {
    render() {
        return (
            <form>
                <h2>Microsoft</h2>
                <div className="form-group">
                    <p class="create_account "> User Email </p>
                    <label className="sign_in">Verify email</label>
                    <p class="create_account"> Enter the code we sent to "User email". If you didn't get the email, check your junk folder or <Link> <a> try again. </a> </Link> </p>
                    <input type="texte" className="form-control" placeholder="Enter code" />
                </div>
                <div className="form-group">

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class ="form-check-label" for="flexCheckDefault">
                        I would like information, tips, and offers about Microsoft products and services.
                        </label>
                    </div>
                    <label class =" testd text-start ">
                    Choosing Next means that you agree to the Microsoft Services Agreement and privacy and cookies statement.
                        </label>


                </div>
                <button type="button" class="btn btn-primary float-right">Next</button>
            </form>
        );
    }
}
