import { createSwitchNavigator } from 'react-navigation'

import HomeView from '../Views/HomeView'
import CategoryView from '../Views/CategoryView'
import RequestAndCompareView from '../Views/RequestAndCompareView'
import MoreView from '../Views/MoreView'
import ItemView from '../Views/ItemView'
import AddReviewView from '../Views/AddReviewView'
import ReviewView from '../Views/ReviewView'
import UserRecordsView from '../Views/UserRecordsView'
import ChangeProfileView from '../Views/ChangeProfileView'
import ChangeProfileNameView from '../Views/ChangeProfileNameView'
import VotesView from '../Views/VotesView'
import VoteCommentView from '../Views/VoteCommentView'
import VoteCommentEditView from '../Views/VoteCommentEditView'
import OpensourceLicenseView from '../Views/OpensourceLicenseView'

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
  },
  UserRecords: {
    screen: UserRecordsView,
    navigationOptions: {
      header: null
    }
  },
  ChangeProfile: {
    screen: ChangeProfileView,
    navigationOptions: {
      header: null
    }
  },
  ChangeProfileName: {
    screen: ChangeProfileNameView,
    navigationOptions: {
      header: null
    }
  },
  Votes: {
    screen: VotesView,
    navigationOptions: {
      header: null
    }
  },
  VoteComment: {
    screen: VoteCommentView,
    navigationOptions: {
      header: null
    }
  },
  VoteCommentEdit: {
    screen: VoteCommentEditView,
    navigationOptions: {
      header: null
    }
  },
  OpensourceLicense: {
    screen: OpensourceLicenseView,
    navigationOptions: {
      header: null
    }
  }
})
