import React from 'react'
import { Body, Button, Container, Header, Icon, Left, Right, Title, Content, Footer } from 'native-base'
import { Platform, StatusBar, KeyboardAvoidingView } from 'react-native'
import VoteCommentCardGroup from '../components/VoteCommentCardGroup'
import VoteCommentButton from '../components/VoteCommentButton'

const platform = Platform.OS

export default class VoteCommentView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      itemName: this.props.navigation.getParam('itemName'),
      itemId: this.props.navigation.getParam('itemId'),
      userId: this.props.navigation.getParam('userId'),
      voteId: this.props.navigation.getParam('voteId')
    }
    this.onChangeText = this.onChangeText.bind(this)
  }
  onChangeText (text) {
    this.setState({
      text: text
    })
  }
  render () {
    return (
      <Container>
        <Header style={platform === 'android' ? androidStyle : {}} hasTabs={this.props.hasTabs}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('Votes', { itemName: this.state.itemName, itemId: this.state.itemId, userId: this.state.userId })}>
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
          <VoteCommentCardGroup userId={this.state.userId} itemId={this.state.itemId} />
        </Content>
        <KeyboardAvoidingView behavior='padding'>
          <Footer style={{ backgroundColor: 'white' }}>
            <VoteCommentButton
              text={this.state.text}
              onChangeText={this.onChangeText}
              voteId={this.state.voteId}
            />
          </Footer>
        </KeyboardAvoidingView>
      </Container>
    )
  }
}

const androidStyle = {
  marginTop: StatusBar.currentHeight
}
