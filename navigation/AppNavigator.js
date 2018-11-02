import { createSwitchNavigator } from 'react-navigation'

import HomeView from '../Views/HomeView'
import CategoryView from '../Views/CategoryView'
import RequestAndCompareView from '../Views/RequestAndCompareView'
import MoreView from '../Views/MoreView'

export default createSwitchNavigator({
  Home: {
    screen: HomeView,
    navigateOptions: {
      header: null
    }
  },
  Category: {
    screen: CategoryView,
    navigateOptions: {
      header: null
    }
  },
  RequestAndCompare: {
    screen: RequestAndCompareView,
    navigateOptions: {
      header: null
    }
  },
  More: {
    screen: MoreView,
    navigateOptions: {
      header: null
    }
  }
})
