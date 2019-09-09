/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {createAppContainer} from 'react-navigation';
// import App from './App';
import {appStackNavigator} from './nav/index';
import {name as appName} from './app.json';
const nav = createAppContainer(appStackNavigator);
AppRegistry.registerComponent(appName, () => nav);
