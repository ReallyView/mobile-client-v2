import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import HomeView from '../Views/HomeView'

const Drawer = createDrawerNavigator(
  {
    Home: {
      screen: HomeView
    }
  }
)

const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: Drawer,
      navigationOptions: {
        header: null
      }
    }
  }
)

export default HomeNavigator
