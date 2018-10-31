import React from 'react'
import { createSwitchNavigator } from 'react-navigation'

import HomeNavigator from './HomeNavigator'
import CategoryNavigator from './CategoryNavigator'
import RequestAndCompareNavigator from './RequestAndCompareNavigator'
import MoreNavigator from './MoreNavigator'

export default createSwitchNavigator({
  Home: HomeNavigator,
  Category: CategoryNavigator,
  RequestAndCompare: RequestAndCompareNavigator,
  More: MoreNavigator
})
