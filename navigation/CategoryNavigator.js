import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import CategoryView from '../Views/CategoryView'

const Drawer = createDrawerNavigator(
  {
    Category: {
      screen: CategoryView
    }
  }
)

const CategoryNavigator = createStackNavigator(
  {
    Category: {
      screen: Drawer,
      navigationOptions: {
        header: null
      }
    }
  }
)

export default CategoryNavigator
