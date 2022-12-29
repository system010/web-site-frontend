import React, { useState } from "react";
export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (

        <div className="auth-form-container">
            <img className="logo" src="vamos2.png" width='230' height='230' />
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="Full name" id="name" name="name" />
                <label htmlfor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlfor="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="******" id="password" name="password" />
                <button>log in</button>
            </form>
            <button className="link-bt" onClick={() => props.onFormSwitch('login')}> Already have an account ? login here.</button>
        </div>
    )
}