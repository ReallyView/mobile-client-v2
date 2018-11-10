import React from 'react'
import {
  Container,
  Footer,
  FooterTab,
  Button,
  Icon,
  Body,
  View,
  Drawer
} from 'native-base'

import MainHeader from '../components/MainHeader'
import SearchHeader from '../components/SearchHeader'
import ItemCardGroup from '../components/ItemCardGroup'
import { SearchItem } from '../components/SearchContents'
import SideBar from '../components/SideBar'

export default class HomeView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isSearchButtonClicked: false,
      itemName: ''
    }
    this.onClickSearchButton = this.onClickSearchButton.bind(this)
    this.onClickBackButton = this.onClickBackButton.bind(this)
    this.onClickAddIcon = this.onClickAddIcon.bind(this)
    this.onChangeItemName = this.onChangeItemName.bind(this)
    this.onClickProfileImage = this.onClickProfileImage.bind(this)
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
  onClickAddIcon () {
    this.props.navigation.navigate('AddReview')
  }
  onChangeItemName (itemName) {
    this.setState({
      itemName: itemName
    })
  }
  onClickProfileImage () {
    this.openDrawer()
  }
  closeDrawer () {
    this._drawer._root.close()
  }
  openDrawer () {
    this._drawer._root.open()
  }
  render () {
    return (
      <Drawer
        ref={(ref) => { this._drawer = ref }}
        content={<SideBar navigation={this.props.navigation} />}
        onClose={() => this.closeDrawer()}
        closedDrawerOffset={0}>
        <Container>
          {
            this.state.isSearchButtonClicked
              ? <SearchHeader
                onClickBackButton={this.onClickBackButton}
                onChangeItemName={this.onChangeItemName} />
              : <MainHeader
                onClickSearchButton={this.onClickSearchButton}
                onClickAddIcon={this.onClickAddIcon}
                onClickProfileImage={this.onClickProfileImage} />
          }
          {
            this.state.isSearchButtonClicked
              ? <Body style={{ alignSelf: 'flex-start' }}>
                {(this.state.itemName)
                  ? <SearchItem itemName={this.state.itemName} navigation={this.props.navigation} />
                  : <View /> }
              </Body>
              : <Body>
                <ItemCardGroup navigation={this.props.navigation} />
              </Body>
          }
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
      </Drawer>
    )
  }
}
