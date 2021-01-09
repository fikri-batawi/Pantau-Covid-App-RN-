/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Home from './src/containers/pages/Home';
import Detail from './src/containers/pages/Detail'
import Main from './Main'
import App_release from './App_release'
import Picker from './picker'

AppRegistry.registerComponent(appName, () => App_release);
