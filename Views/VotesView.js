import React, { Component } from 'react'
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Icon,
  Button
} from 'native-base'
import { Platform, StatusBar } from 'react-native'

import VoteCardGroup from '../components/VoteCardGroup'

const platform = Platform.OS

export default class VotesView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      itemName: this.props.navigation.getParam('itemName'),
      itemId: this.props.navigation.getParam('itemId'),
      userId: this.props.navigation.getParam('userId') || ''
    }
  }
  render () {
    return (
      <Container>
        <Header style={platform === 'android' ? androidStyle : {}} hasTabs={this.props.hasTabs}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('Item', {
              itemName: this.state.itemName,
              itemId: this.state.itemId,
              userId: this.state.userId
            })}>
              <Icon
                name={'arrow-back'} />
            </Button>
          </Left>
          <Body>
            <Title>투표</Title>
          </Body>
          <Right />
        </Header>
        <Body>
          <VoteCardGroup itemId={this.state.itemId} userId={this.state.userId} itemName={this.state.itemName} navigation={this.props.navigation} />
        </Body>
      </Container>
    )
  }
}

const androidStyle = {
  marginTop: StatusBar.currentHeight
}
