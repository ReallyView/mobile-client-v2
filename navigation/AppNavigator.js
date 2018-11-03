import { createSwitchNavigator } from 'react-navigation'

import LoginView from '../Views/LoginView'
import HomeView from '../Views/HomeView'
import CategoryView from '../Views/CategoryView'
import RequestAndCompareView from '../Views/RequestAndCompareView'
import MoreView from '../Views/MoreView'
import ItemView from '../Views/ItemView'
import AddReviewView from '../Views/AddReviewView'

export default createSwitchNavigator({
  Login: {
    screen: LoginView,
    navigateOptions: {
      header: null
    }
  },
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
  },
  Item: {
    screen: ItemView,
    navigateOptions: {
      header: null
    }
  },
  AddReview: {
    screen: AddReviewView,
    navigateOptions: {
      header: null
    }
  }
})
