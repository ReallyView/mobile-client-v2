import React from 'react'
import {
  Header,
  Button,
  Icon,
  Input,
  Item,
  Text,
  Body,
  Container
} from 'native-base'
import { Platform, StatusBar } from 'react-native'
import Layout from '../constants/Layout'

const platfrom = Platform.OS

export default class SearchHeader extends React.Component {
  render () {
    if (platfrom === 'android') {
      return (
        <Header style={{ marginTop: StatusBar.currentHeight }}>
          <Button transparent style={{ marginLeft: -0.04 * Layout.window.width }} onPress={this.props.onClickBackButton}>
            <Text>Back</Text>
          </Button>
          <Body>
            <Item rounded>
              <Icon name='search' />
              <Input
                placeholder='Search'
                onChangeText={(itemName) =>
                  this.props.onChangeItemName(itemName)}
              />
            </Item>
          </Body>
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
          <Input
            placeholder='Search'
            onChangeText={(itemName) =>
              this.props.onChangeItemName(itemName)}
          />
        </Item>
      </Header>
    )
  }
}
