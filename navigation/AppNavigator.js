import { createSwitchNavigator } from 'react-navigation'

import HomeView from '../Views/HomeView'
import CategoryView from '../Views/CategoryView'
import RequestAndCompareView from '../Views/RequestAndCompareView'
import MoreView from '../Views/MoreView'
import ItemView from '../Views/ItemView'
import AddReviewView from '../Views/AddReviewView'
import ReviewView from '../Views/ReviewView'

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
  },
  Review: {
    screen: ReviewView,
    navigateOptions: {
      header: null
    }
  }
})
