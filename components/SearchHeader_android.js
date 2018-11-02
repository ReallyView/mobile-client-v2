import React from 'react'
import {
  Header,
  Button,
  Icon,
  Input,
  Item,
  Text,
  Left,
  Body,
  Right
} from 'native-base'

import Layout from '../constants/Layout'

export default class SearchHeaderForAndroid extends React.Component {
  render () {
    return (
      <Header>
        <Left>
          <Button transparent style={{ marginLeft: -0.04 * Layout.window.width }} onPress={this.props.onClickBackButton}>
            <Text>Back</Text>
          </Button>
        </Left>
        <Body>
          <Item>
            <Icon name='search' />
            <Input placeholder='Search' />
          </Item>
        </Body>
        <Right>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Right>
      </Header>
    )
  }
}
