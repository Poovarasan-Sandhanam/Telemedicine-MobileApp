import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import ProfileSetupScreen from '../screens/Profile/ProfileSetupScreen';
// import AppointmentListScreen from '../screens/Appointments/AppointmentListScreen';
// import VideoConsultationScreen from '../screens/Consultations/VideoConsultationScreen';
// import MessagingScreen from '../screens/Messaging/MessagingScreen';
// import PrescriptionScreen from '../screens/Prescription/PrescriptionScreen';
// import PaymentScreen from '../screens/Payment/PaymentScreen';

const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Profile" component={ProfileSetupScreen} />
      <Tab.Screen name="Appointments" component={AppointmentListScreen} />
      <Tab.Screen name="Consultations" component={VideoConsultationScreen} />
      <Tab.Screen name="Messaging" component={MessagingScreen} />
      <Tab.Screen name="Prescriptions" component={PrescriptionScreen} />
      <Tab.Screen name="Payment" component={PaymentScreen} /> */}
    </Tab.Navigator>
  );
};

export default AppStack;
