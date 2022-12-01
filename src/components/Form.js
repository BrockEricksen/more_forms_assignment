import React, { useState } from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confPasswordError, setConfPasswordError] = useState("");

    const handleFirstName = (e) => {
        e.preventDefault();
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First name is required!");
        } else if(e.target.value.length < 2) {
            setFirstNameError("First name must be at least 2 characters!");
        } else {
            // for empty string
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
        setLastNameError("Last name is required!");
        } else if(e.target.value.length < 2) {
        setLastNameError("First name must be at least 2 characters!");
        } else {
        // for empty string
        setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters!");
        } else {
            // for empty string
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters!");
        } else {
            // for empty string
            setPasswordError("");
        }
    }

    const handleConfPassword = (e) => {
        setConfPassword(e.target.value);
        if(e.target.value.length < 1) {
            setConfPasswordError("Confirm password is required!");
        } else if(e.target.value.length < 8) {
            setConfPasswordError("Confirm password must be at least 8 characters!");
        } else if(e.target.value !== password) {
            setConfPasswordError("Passwords must match!");
        } else {
            // for empty string
            setConfPasswordError("");
        }
    }
    
    return(
        <form>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={ handleFirstName } />
                {
                    firstNameError ?
                    <p>{ firstNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={ handleLastName } />
                {
                    lastNameError ?
                    <p>{ lastNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ handleEmail } />
                {
                    emailError ?
                    <p>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ handlePassword } />
                {
                    passwordError ?
                    <p>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ handleConfPassword } />
                {
                    confPasswordError ?
                    <p>{ confPasswordError }</p> :
                    ''
                }
            </div>

            <h4>First Name: {firstName}</h4>
            <h4>Last Name: {lastName}</h4>
            <h4>Email: {email}</h4>
            <h4>Password: {password}</h4>
            <h4>Confirm Password: {confPassword}</h4>
        </form>
    )
}

export default Form;