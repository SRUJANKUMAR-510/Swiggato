// import { login, logout } from './authSlice';

// export const loginUser = (userData) => (dispatch) => {
//   // Simulate login API call
//   // Replace this with your actual authentication logic
//   // Example: axios.post('/api/login', userData)
//   setTimeout(() => {
//     dispatch(login(userData));
//   }, 1000);
// };

// export const logoutUser = () => (dispatch) => {
//   // Simulate logout API call
//   // Replace this with your actual logout logic
//   // Example: axios.post('/api/logout')
//   setTimeout(() => {
//     dispatch(logout());
//   }, 1000);
// };
import axios from 'axios';
import { login, logout } from './authSlice';

export const loginUser = (userData) => async (dispatch) => {
  try {
    // Simulate login API call
    // Replace this with your actual authentication logic
    const response = await axios.post('/api/login', userData);

    // Assuming the API returns a user object on successful login
    const user = response.data;

    dispatch(login(user));
  } catch (error) {
    console.error('Login failed:', error.message);
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    // Simulate logout API call
    // Replace this with your actual logout logic
    await axios.post('/api/logout');

    dispatch(logout());
  } catch (error) {
    console.error('Logout failed:', error.message);
  }
};
