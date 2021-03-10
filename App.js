import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import colorScreen from './src/screens/colorScreen';

const navigator = createStackNavigator(
  {// paginas
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image:ImageScreen,
    Counter:CounterScreen,
    Color:colorScreen,
  },
  {// rota inicial!
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);
//createStacknav é oque faz a pagina carregar.
export default createAppContainer(navigator);
