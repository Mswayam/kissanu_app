import { AppRegistry } from 'react-native';
import App from './App';
import appJson from './app.json';

const appName = appJson.name || 'KisaanuNexus';

AppRegistry.registerComponent(appName, () => App);

AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app-root') || document.getElementById('root'),
});
