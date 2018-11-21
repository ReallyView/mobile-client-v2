import React from 'react'
import { Card, CardItem, Text, Thumbnail, Item, Button, Input, Right, Header, Container, Left, Icon, Body, Title } from 'native-base'

import Layout from '../constants/Layout'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Platform, StatusBar } from 'react-native'

const width = Layout.window.width

const platform = Platform.OS

class VoteCommentEdit extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      comment: this.props.navigation.getParam('comment'),
      text: this.props.navigation.getParam('text'),
      comments: this.props.navigation.getParam('comments')
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
            <Button
              transparent
              onPress={() =>
                this.props.navigation.navigate('VoteComment',
                  { itemName: this.props.navigation.getParam('itemName'),
                    itemId: this.props.navigation.getParam('itemId'),
                    userId: this.props.navigation.getParam('userId'),
                    voteId: this.props.navigation.getParam('voteId'),
                    comments: this.props.navigation.getParam('comments')
                  })
              }
            >
              <Icon
                name={'arrow-back'} />
            </Button>
          </Left>
          <Body>
            <Title>댓글 수정</Title>
          </Body>
          <Right />
        </Header>
        <Item style={{ borderBottomWidth: 0, marginTop: 0.04 * width }}>
          <Card transparent>
            <CardItem>
              {
                (this.state.comment.author.profileImgUrl)
                  ? <Thumbnail circular style={{ margin: 0.02 * width }} source={{ uri: (this.state.comment.author.profileImgUrl) }} />
                  : <Thumbnail circular style={{ margin: 0.02 * width }} source={require('../assets/images/profileIcon.png')} />
              }
              <Card style={{ borderRadius: 0.04 * width }}>
                <Input
                  style={{ width: 0.7 * width }}
                  value={this.state.text}
                  onChangeText={(text) => this.onChangeText(text)}
                />
              </Card>
            </CardItem>
            <Button
              style={{ marginLeft: 0.7 * width }}
              transparent
              onPress={() => {
                this.props.mutate({
                  variables: {
                    commentId: this.state.comment.id,
                    text: this.state.text
                  }
                })
                  .then(result => {
                    let tempComments = this.state.comments
                    for (let i = 0; i < tempComments.length; i++) {
                      if (tempComments[i].id === result.data.updateComment.id) {
                        tempComments[i] = result.data.updateComment
                        break
                      }
                    }
                    this.setState({
                      comments: tempComments
                    })
                    this.props.navigation.navigate('VoteComment',
                      { itemName: this.props.navigation.getParam('itemName'),
                        itemId: this.props.navigation.getParam('itemId'),
                        userId: this.props.navigation.getParam('userId'),
                        voteId: this.props.navigation.getParam('voteId'),
                        comments: this.state.comments
                      })
                  })
                  .catch(error =>
                    console.error(error))
              }}
            >
              <Text>제출하기</Text>
            </Button>
          </Card>
        </Item>
      </Container>
    )
  }
}

export default graphql(gql`
  mutation ($commentId: ID!, $text: String!) {
    updateComment(commentId: $commentId, text: $text) {
      id
      text
      author {
        id
        name
        email
        profileImgUrl
      }
    }
  }
`)(VoteCommentEdit)

const androidStyle = {
  marginTop: StatusBar.currentHeight
}
