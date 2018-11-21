import React from 'react'
import { Body, Button, Container, Header, Icon, Left, Right, Title, Content, Footer, Input, Form } from 'native-base'
import { Platform, StatusBar, KeyboardAvoidingView } from 'react-native'
import VoteCommentCardGroup from '../components/VoteCommentCardGroup'
import VoteCommentSubmit from '../components/VoteCommentSubmit'

import Layout from '../constants/Layout'

const width = Layout.window.width
const height = Layout.window.height

const platform = Platform.OS

export default class VoteCommentView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      itemName: this.props.navigation.getParam('itemName'),
      itemId: this.props.navigation.getParam('itemId'),
      userId: this.props.navigation.getParam('userId'),
      voteId: this.props.navigation.getParam('voteId'),
      comments: this.props.navigation.getParam('comments'),
      text: '',
      isSubmitReady: false
    }
    this.onChangeText = this.onChangeText.bind(this)
    this.finishSubmitComment = this.finishSubmitComment.bind(this)
    this.onChangeIsSubmitReady = this.onChangeIsSubmitReady.bind(this)
  }
  onChangeText (text) {
    this.setState({
      text: text
    })
  }
  finishSubmitComment (comment) {
    this.setState({
      comments: this.state.comments.concat(comment),
      isSubmitReady: false,
      text: ''
    })
  }
  onChangeIsSubmitReady () {
    this.setState({
      isSubmitReady: true
    })
  }
  render () {
    return (
      <Container>
        <Header style={platform === 'android' ? androidStyle : {}} hasTabs={this.props.hasTabs}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('Votes',
                { itemName: this.state.itemName,
                  itemId: this.state.itemId,
                  userId: this.state.userId,
                  comments: this.state.comments
                })
              }
            >
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
          <VoteCommentCardGroup
            userId={this.state.userId}
            comments={this.state.comments}
            itemName={this.state.itemName}
            itemId={this.state.itemId}
            voteId={this.state.voteId}
            navigation={this.props.navigation}
          />
        </Content>
        <KeyboardAvoidingView behavior='padding'>
          <Footer style={{ backgroundColor: 'white' }}>
            <Input
              placeholder='댓글을 입력하세요.'
              value={this.state.text}
              onChangeText={(text) => this.onChangeText(text)}
            />
            {
              (this.state.text)
                ? <Button
                  transparent
                  style={{ marginTop: 0.02 * width, marginRight: 0.04 * width }}
                  onPress={this.onChangeIsSubmitReady}
                >
                  <Icon name={'ios-arrow-forward-outline'} />
                </Button>
                : <Form />
            }
          </Footer>
        </KeyboardAvoidingView>
        {
          (this.state.isSubmitReady)
            ? <VoteCommentSubmit voteId={this.state.voteId} text={this.state.text} finishSubmitComment={this.finishSubmitComment} />
            : <Form />
        }
      </Container>
    )
  }
}

const androidStyle = {
  marginTop: StatusBar.currentHeight
}
