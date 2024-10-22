import axios from 'axios';

export const login = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post('/api/login', credentials);
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
  }
};

export const register = (data) => async (dispatch) => {
  try {
    const response = await axios.post('/api/register', data);
    dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'REGISTER_FAILURE', payload: error.message });
  }
};
