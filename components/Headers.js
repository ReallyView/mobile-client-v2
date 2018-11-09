import React from 'react'
import { Button, Icon, Header, Title, Left, Body, Right } from 'native-base'
import Layout from '../constants/Layout'
import { Platform, StatusBar } from 'react-native'

const platform = Platform.OS

export default class Headers extends React.Component {
  render () {
    return (
      <Header style={platform === 'android' ? androidStyle : {}}>
        <Left>
          <Button transparent onPress={() => this.props.navigation.navigate('Home')}>
            <Icon name={'arrow-back'} style={{ marginLeft: 0.02 * Layout.window.width }} />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.headerTitle}</Title>
        </Body>
        <Right />
      </Header>
    )
  }
}

const androidStyle = {
  marginTop: StatusBar.currentHeight
}
