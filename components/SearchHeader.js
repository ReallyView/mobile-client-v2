import React from 'react'
import {
  Header,
  Button,
  Icon,
  Input,
  Item,
  Text,
  Body,
  Content,
  Container
} from 'native-base'
import { Platform, StatusBar } from 'react-native'
import Layout from '../constants/Layout'
import { SearchItem } from './SearchContents'

const platfrom = Platform.OS

export default class SearchHeader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      itemName: ''
    }
  }
  render () {
    if (platfrom === 'android') {
      return (
        <Container>
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
                    this.setState({
                      itemName: itemName
                    })}
                />
              </Item>
            </Body>
            <Button transparent>
              <Text>Search</Text>
            </Button>
          </Header>
          <Content>
            <SearchItem name={this.state.itemName} />
          </Content>
        </Container>
      )
    }

    return (
      <Container>
        <Header searchBar rounded>
          <Button transparent style={{ marginLeft: -0.04 * Layout.window.width }} onPress={this.props.onClickBackButton}>
            <Text>Back</Text>
          </Button>
          <Item>
            <Icon name='search' />
            <Input
              placeholder='Search'
              onChangeText={(itemName) =>
                this.setState({
                  itemName: itemName
                })}
            />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content>
          <SearchItem name={this.state.itemName} />
        </Content>
      </Container>
    )
  }
}
