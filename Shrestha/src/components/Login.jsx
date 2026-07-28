import React, { useState } from 'react';

export default function Login({ users, onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      setErrorMessage('Login Failed');
      return;
    }

    const matchedUser = users.find(
      (u) => u.username === username.trim() && u.password === password.trim()
    );

    if (matchedUser) {
      setErrorMessage('');
      onLoginSuccess(matchedUser);
    } else {
      setErrorMessage('Login Failed');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-header bg-dark text-white text-center">
              <h4 className="mb-0">Library Management Login</h4>
            </div>
            <div className="card-body p-4">
              {errorMessage && (
                <div className="alert alert-danger mb-3" role="alert">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label className="form-label">Username / Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="form-group mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="remember-me" className="text-info d-flex align-items-center gap-2">
                    <span>Remember me</span>
                    <input
                      id="remember-me"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                  </label>
                  <br />
                  <button type="submit" className="btn btn-info btn-md text-white">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
