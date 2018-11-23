import { AppRegistry } from 'react-native';
import App from './src/bootstrap';
import { name as appName } from './app.json';

const app = App();

AppRegistry.registerComponent(appName, () => app);
