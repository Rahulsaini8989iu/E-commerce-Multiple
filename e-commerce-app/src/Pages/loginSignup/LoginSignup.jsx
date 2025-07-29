import React, { useState } from 'react';
import './LoginSignup.css';

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{isSignup ? 'Sign Up' : 'Login'}</h1>
        <form className="loginsignup-fields" onSubmit={handleSubmit}>
          {isSignup && (
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          <button type="submit">Continue</button>
        </form>
        <p className="loginsignup-login">
          {isSignup ? 'Already have an account?' : 'New here?'}
          <span onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? ' Login here' : ' Sign up here'}
          </span>
        </p>
        <div className="loginsignup-agree">
          {isSignup && (
            <>
              <input type="checkbox" name="" id="" />
              <p>
                By continuing, I agree to the terms of use & privacy policy.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
