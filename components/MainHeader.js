import React from 'react'
import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title
} from 'native-base'

import Layout from '../constants/Layout'

export default class MainHeader extends React.Component {
  render () {
    return (
      <Header>
        <Left>
          <Button transparent>
            <Icon name={'ios-contact'} style={{ color: 'gray', marginLeft: 0.02 * Layout.window.width }} />
          </Button>
        </Left>
        <Body>
          <Title>ReallyView</Title>
        </Body>
        <Right>
          <Button transparent onPress={this.props.onClickSearchButton}>
            <Icon name={'search'} style={{ color: 'gray' }} />
          </Button>
          <Button transparent>
            <Icon name={'md-add'} style={{ color: 'gray' }} />
          </Button>
        </Right>
      </Header>
    )
  }
}
