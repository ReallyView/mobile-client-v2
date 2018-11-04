import React from 'react'
import { Button, Icon, Header, Title, Left, Body, Right } from 'native-base'
import Layout from '../constants/Layout'
import { Platform, StatusBar } from 'react-native'

const platform = Platform.OS

export default class AddReviewHeader extends React.Component {
  render () {
    if (platform === 'android') {
      return (
        <Header style={{ marginTop: StatusBar.currentHeight }}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name={'arrow-back'} style={{ marginLeft: 0.02 * Layout.window.width }} />
            </Button>
          </Left>
          <Body>
            <Title>비교하기</Title>
          </Body>
          <Right />
        </Header>
      )
    }
    return (
      <Header>
        <Left>
          <Button transparent onPress={() => this.props.navigation.navigate('Home')}>
            <Icon name={'arrow-back'} style={{ marginLeft: 0.02 * Layout.window.width }} />
          </Button>
        </Left>
        <Body>
          <Title>비교하기</Title>
        </Body>
        <Right />
      </Header>
    )
  }
}
