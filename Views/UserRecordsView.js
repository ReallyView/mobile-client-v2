import React from 'react'
import {
  Container,
  Tab,
  Tabs,
  TabHeading,
  Text,
  View
} from 'native-base'
import { AsyncStorage, StyleSheet } from 'react-native'

import Headers from '../components/Headers'
import UserRecordsVoteRequest from '../components/UserRecordsVoteRequest'
import UserRecordsReview from '../components/UserRecordsReview'
import UserRecordsLikeAndDislike from '../components/UserRecordsLikeAndDislike'
import UserRecordsVotedVotes from '../components/UserRecordsVotedVotes'
import Layout from '../constants/Layout'

const width = Layout.window.width

export default class UserRecordsView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      type: this.props.navigation.getParam('type'),
      userId: ''
    }
    this.onClickReviewCard = this.onClickReviewCard.bind(this)
  }
  componentWillMount () {
    let initialPage
    switch (this.state.type) {
      case 'subscribe':
        initialPage = 0
        break
      case 'voteRequest':
        initialPage = 1
        break
      case 'review':
        initialPage = 2
        break
      case 'likeAndDislike':
        initialPage = 3
        break
      case 'vote':
        initialPage = 4
        break
      default:
        initialPage = 0
    }
    this.setState({
      initialPage: initialPage
    })
    const getData = async () => {
      const getUserId = await AsyncStorage.getItem('userId')
      this.setState({
        userId: getUserId
      })
    }
    getData()
  }
  onClickReviewCard (review) {
    this.props.navigation.navigate('Review', {
      itemName: review.on.name,
      itemId: review.on.id,
      review: review,
      fromUserRecord: true
    })
  }
  render () {
    return (
      <Container>
        <Headers
          navigation={this.props.navigation}
          headerTitle={'내 기록'}
          hasTabs
          navigate={'Home'}
        />
        <Tabs initialPage={this.state.initialPage}>
          <Tab heading={<TabHeading><Text style={styles.tabHeading}>구독</Text></TabHeading>} />
          <Tab heading={<TabHeading><Text style={styles.tabHeading}>투표 요청</Text></TabHeading>}>
            <UserRecordsVoteRequest userId={this.state.userId} />
          </Tab>
          <Tab heading={<TabHeading><Text style={styles.tabHeading}>리뷰</Text></TabHeading>}>
            <UserRecordsReview userId={this.state.userId} onClickReviewCard={this.onClickReviewCard} />
          </Tab>
          <Tab hastabs heading={<TabHeading><Text style={styles.tabHeading}>{'좋아요\n/ 싫어요'}</Text></TabHeading>}>
            {this.state.userId
              ? <UserRecordsLikeAndDislike userId={this.state.userId} onClickReviewCard={this.onClickReviewCard} />
              : <View />}
          </Tab>
          <Tab heading={<TabHeading><Text style={styles.tabHeading}>투표한</Text></TabHeading>}>
            <UserRecordsVotedVotes userId={this.state.userId}/>
          </Tab>
        </Tabs>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  tabHeading: {
    fontSize: 0.04 * width
  }
})
