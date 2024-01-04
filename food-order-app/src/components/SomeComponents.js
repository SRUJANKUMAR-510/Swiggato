import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuth } from '../features/auth/authSlice';
import { loginUser, logoutUser } from '../features/auth/authActions';

const SomeComponent = () => {
  const { isAuthenticated, user } = useSelector(selectAuth);
  const dispatch = useDispatch();

  const handleLogin = () => {
    const userData = { username: 'exampleUser' };
    dispatch(loginUser(userData));
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      {isAuthenticated ? (
        <p>Welcome, {user.username}!</p>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}

      {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
};

export default SomeComponent;
