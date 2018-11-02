import React from 'react'
import {
  Header,
  Button,
  Icon,
  Input,
  Item,
  Text,
  Body
} from 'native-base'
import { Platform } from 'react-native'
import Layout from '../constants/Layout'

const platfrom = Platform.OS

export default class SearchHeader extends React.Component {
  render () {
    if (platfrom === 'android') {
      return (
        <Header>
          <Button transparent style={{ marginLeft: -0.04 * Layout.window.width }} onPress={this.props.onClickBackButton}>
            <Text>Back</Text>
          </Button>
          <Body>
            <Item rounded>
              <Icon name='search' />
              <Input style={{ width: 100 }} placeholder='Search' />
            </Item>
          </Body>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      )
    }
    return (
      <Header searchBar rounded>
        <Button transparent style={{ marginLeft: -0.04 * Layout.window.width }} onPress={this.props.onClickBackButton}>
          <Text>Back</Text>
        </Button>
        <Item>
          <Icon name='search' />
          <Input placeholder='Search' />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
    )
  }
}
