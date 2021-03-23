import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import CounterScreenState from './src/screens/CounterScreenWithState';
import colorScreen from './src/screens/colorScreen';
import SquareScreen from './src/screens/SquareScreen';

const navigator = createStackNavigator(
  {// paginas
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image:ImageScreen,
    Counter:CounterScreen,
    Color:colorScreen,
    Square:SquareScreen,
    CounterState:CounterScreenState
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
