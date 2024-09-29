import {useState} from 'react';
import { useNavigate } from "react-router-dom";


const Admin = ({onLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const handleSubmit = (event) => {
      event.preventDefault();

      // Simulate admin login process
      if (email == 'nancymissy187@gmail.com' && password == 'me') {
        // onLogin({ email, role: 'admin' });
        navigate('/dashboard');
      } else {
        alert('Invalid email or password');
      }
    };

    return (
      <div className="login-container">
        <div className="login">
          <h2>Admin Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="button-submit">
              Login
            </button>
          </form>
        </div>
      </div>
    );
}

export default Admin;