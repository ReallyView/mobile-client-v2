import React from 'react'
import {
  Container,
  Footer,
  FooterTab,
  Button,
  Icon,
  Body
} from 'native-base'

import MainHeader from '../components/MainHeader'
import SearchHeader from '../components/SearchHeader'
import ItemCardGroup from '../components/ItemCardGroup'

export default class HomeView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isSearchButtonClicked: false,
      token: this.props.navigation.getParam('token'),
      email: this.props.navigation.getParam('email'),
      name: this.props.navigation.getParam('name'),
      profileImgUrl: this.props.navigation.getParam('profileImgUrl')
    }
    this.onClickSearchButton = this.onClickSearchButton.bind(this)
    this.onClickBackButton = this.onClickBackButton.bind(this)
    this.onClickItemCard = this.onClickItemCard.bind(this)
    this.onClickAddIcon = this.onClickAddIcon.bind(this)
  }
  onClickSearchButton () {
    this.setState({
      isSearchButtonClicked: true
    })
  }
  onClickBackButton () {
    this.setState({
      isSearchButtonClicked: false
    })
  }
  onClickItemCard (itemName, itemId) {
    this.props.navigation.navigate('Item', { itemName: itemName, itemId: itemId })
  }
  onClickAddIcon () {
    this.props.navigation.navigate('AddReview')
  }
  render () {
    return (
      <Container>
        {
          this.state.isSearchButtonClicked
            ? <SearchHeader onClickBackButton={this.onClickBackButton} />
            : <MainHeader
              onClickSearchButton={this.onClickSearchButton}
              onClickAddIcon={this.onClickAddIcon} />
        }
        <Body style={{ backgroundColor: '#e9ebee' }}>
          {
            this.state.isSearchButtonClicked
              ? <Body />
              : <ItemCardGroup onClickItemCard={this.onClickItemCard} navigation={this.props.navigation} />
          }
        </Body>
        <Footer>
          <FooterTab>
            <Button active>
              <Icon active name='home' />
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Category')}>
              <Icon name='menu' />
            </Button>
            <Button onPress={() => this.props.navigation.navigate('RequestAndCompare')}>
              <Icon name='navigate' />
            </Button>
            <Button onPress={() => this.props.navigation.navigate('More', { email: this.state.email, name: this.state.name, profileImgUrl: this.state.profileImgUrl })}>
              <Icon name='ios-more' />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}
