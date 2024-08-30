// Register.jsx
import React, { useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the user data to local storage
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    alert('Registration successful!');
    // Optionally, redirect to login page or home page
  };

  return (
    <div className='register'>
      <div className="register-content">
        <h2>Register</h2>
        <h4>Join Ovacado Harvesters</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-content">
            <label>
              Email:
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </label>
            <label>
              Password:
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </label>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
