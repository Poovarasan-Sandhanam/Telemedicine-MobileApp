import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json'; // Make sure this matches the name in app.json

AppRegistry.registerComponent(appName, () => App);