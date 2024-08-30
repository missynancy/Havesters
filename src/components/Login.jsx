
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    if (email === storedEmail && password === storedPassword) {
      alert('Login successful!');
      navigate('/applications');

      // Notify the server to send an email notification
      try {
        await fetch('http://localhost:3000/send-notification', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            subject: 'Welcome Back!',
            text: 'You have successfully logged in. Here are your notifications...',
          }),
        });
      } catch (error) {
        console.error('Error sending notification:', error);
      }
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login">
      <div className="login-content">
        <h2>Login</h2>
        <h4>Welcome back</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-content">
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email..."
                required
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password..."
                required
              />
            </label>
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
