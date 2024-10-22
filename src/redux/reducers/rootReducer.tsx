import { combineReducers } from 'redux';
import authReducer from './authReducer';
import appointmentReducer from './appointmentReducer';
// Other reducers like consultationReducer, messagingReducer, etc.

const rootReducer = combineReducers({
  auth: authReducer,
  appointments: appointmentReducer,
  // Other reducers
});

export default rootReducer;
