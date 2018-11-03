import React from 'react'
import { Button, Icon, Header, Title, Left, Body, Right } from 'native-base'
import Layout from '../constants/Layout'

export default class MoreHeader extends React.Component {
  render () {
    return (
      <Header>
        <Left>
          <Button transparent onPress={() => this.props.navigation.navigate('Home')}>
            <Icon name={'ios-arrow-back'} style={{ color: 'gray', marginLeft: 0.02 * Layout.window.width }} />
          </Button>
        </Left>
        <Body>
          <Title>더보기</Title>
        </Body>
        <Right />
      </Header>
    )
  }
}
