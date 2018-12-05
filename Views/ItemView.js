import React, { Component } from 'react'
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Icon,
  Button,
  Text
} from 'native-base'

import ReviewCardGroup from '../components/ReviewCardGroup'
import SubscribeButton from '../components/SubscribeButton'
import { AsyncStorage, Platform, StatusBar } from 'react-native'

const platform = Platform.OS

export default class ItemView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      itemName: this.props.navigation.getParam('itemName'),
      itemId: this.props.navigation.getParam('itemId'),
      userId: this.props.navigation.getParam('userId') || '',
      subscribedUsers: this.props.navigation.getParam('subscribedUsers') || '',
      isSubscribed: false
    }
    this.onClickReviewCard = this.onClickReviewCard.bind(this)
  }
  componentWillMount () {
    const getData = async () => {
      const getUserId = await AsyncStorage.getItem('userId')
      this.setState({
        userId: getUserId
      })
    }
    getData()
    if (this.state.subscribedUsers.length > 0) {
      for (let i = 0; i < this.state.subscribedUsers.length; i++) {
        if (this.state.subscribedUsers[i].id === this.state.userId) {
          this.setState({
            isSubscribed: true
          })
        }
      }
    }
  }
  onClickReviewCard (review) {
    this.props.navigation.navigate('Review', {
      itemName: this.state.itemName,
      itemId: this.state.itemId,
      review: review
    })
  }
  render () {
    return (
      <Container>
        <Header style={platform === 'android' ? androidStyle : {}} hasTabs={this.props.hasTabs}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('Home')}>
              <Icon
                name={'arrow-back'} />
            </Button>
          </Left>
          <Body>
            <Title>{this.state.itemName}</Title>
          </Body>
          <Right>
            <SubscribeButton itemId={this.state.itemId} />
            <Button transparent onPress={() => this.props.navigation.navigate('Votes', {
              itemName: this.state.itemName,
              itemId: this.state.itemId,
              userId: this.state.userId
            })}>
              <Text>투표</Text>
            </Button>
          </Right>
        </Header>
        <Body>
          <ReviewCardGroup itemId={this.state.itemId} onClickReviewCard={this.onClickReviewCard} userId={this.state.userId} />
        </Body>
      </Container>
    )
  }
}

const androidStyle = {
  marginTop: StatusBar.currentHeight
}
