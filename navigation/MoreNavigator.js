import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import MoreView from '../Views/MoreView'

const Drawer = createDrawerNavigator(
  {
    More: {
      screen: MoreView
    }
  }
)

const MoreNavigator = createStackNavigator(
  {
    More: {
      screen: Drawer,
      navigationOptions: {
        header: null
      }
    }
  }
)

export default MoreNavigator
