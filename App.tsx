// import React from 'react';
// import AppNavigator from './src/navigations/AppNavigator';
// const App = () => {
//   return <AppNavigator />;
// };

// export default App;

import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import store from "./src/redux/store"; // Make sure the path to your Redux store is correct
import AppNavigator from "./src/navigations/AppNavigator";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
