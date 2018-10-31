import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import RequestAndCompareView from '../Views/RequestAndCompareView'

const Drawer = createDrawerNavigator(
  {
    RequestAndCompare: {
      screen: RequestAndCompareView
    }
  }
)

const RequestAndCompareNavigator = createStackNavigator(
  {
    RequestAndCompare: {
      screen: Drawer,
      navigationOptions: {
        header: null
      }
    }
  }
)

export default RequestAndCompareNavigator
