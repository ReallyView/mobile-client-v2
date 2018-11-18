import React from 'react'
import { Body, Button, Container, Header, Icon, Left, Right, Title, Content } from 'native-base'
import { Platform, StatusBar } from 'react-native'
import VoteCommentCardGroup from '../components/VoteCommentCardGroup'

const platform = Platform.OS

export default class VoteCommentView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      itemName: this.props.navigation.getParam('itemName'),
      itemId: this.props.navigation.getParam('itemId'),
      userId: this.props.navigation.getParam('userId'),
    }
  }
  render () {
    return (
      <Container>
        <Header style={platform === 'android' ? androidStyle : {}} hasTabs={this.props.hasTabs}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('Vote', { itemName: this.state.itemName, itemId: this.state.itemId, userId: this.state.userId })}>
              <Icon
                name={'arrow-back'} />
            </Button>
          </Left>
          <Body>
            <Title>댓글</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <VoteCommentCardGroup itemId={this.state.itemId} />
        </Content>
      </Container>
    )
  }
}

const androidStyle = {
  marginTop: StatusBar.currentHeight
}