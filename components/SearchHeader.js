import React from 'react'
import {
  Header,
  Button,
  Icon,
  Input,
  Item,
  Text
} from 'native-base'

import Layout from '../constants/Layout'

export default class MainHeader extends React.Component {
  render () {
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
