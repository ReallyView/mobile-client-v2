import React from 'react'
import { Card, CardItem, Text, Thumbnail, Item, View, Button } from 'native-base'

import VoteCommentDelete from './VoteCommentDelete'
import Layout from '../constants/Layout'
import { Alert } from 'react-native'

const width = Layout.window.width
const height = Layout.window.height

export default class VoteCommentCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      comment: this.props.comment,
      userId: this.props.userId,
      text: this.props.comment.text,
      isDeleteReady: false,
      isDeleted: false
    }
    this.onChangeText = this.onChangeText.bind(this)
    this.onChangeIsDeleteReady = this.onChangeIsDeleteReady.bind(this)
    this.onChangeIsDeleted = this.onChangeIsDeleted.bind(this)
    this.onClickDeleteButton = this.onClickDeleteButton.bind(this)
  }
  onChangeText (text) {
    this.setState({
      text: text
    })
  }
  onChangeIsDeleteReady () {
    this.setState({
      isDeleteReady: true
    })
  }
  onChangeIsDeleted () {
    this.setState({
      isDeleted: true
    })
  }
  onClickDeleteButton () {
    Alert.alert(
      'Message',
      '정말로 지우시겠습니까?',
      [
        { text: 'Cancel' },
        {
          text: 'OK',
          onPress: this.onChangeIsDeleteReady
        }
      ]
    )
  }
  render () {
    if (this.state.isDeleted) {
      return (
        <Card transparent style={{ width: 0.95 * width, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ margin: 0.05 * height }}>삭제된 댓글입니다.</Text>
        </Card>
      )
    }
    return (
      <Item style={{ borderBottomWidth: 0, marginTop: 0.04 * width }}>
        <Card transparent>
          <CardItem>
            {
              (this.state.comment.author.profileImgUrl)
                ? <Thumbnail circular style={{ margin: 0.02 * width, marginLeft: 0.04 * width }} source={{ uri: (this.state.comment.author.profileImgUrl) }} />
                : <Thumbnail circular style={{ margin: 0.02 * width, marginLeft: 0.04 * width }} source={require('../assets/images/profileIcon.png')} />
            }
            <View>
              <Card style={{ borderRadius: 0.05 * width, backgroundColor: '#DFDFDF' }}>
                <Text style={{ fontWeight: 'bold', margin: 0.02 * width, fontSize: 0.03 * width }}>{this.state.comment.author.name}</Text>
                <Text style={{ margin: 0.02 * width, fontSize: 0.04 * width }}>{this.state.comment.text}</Text>
              </Card>
            </View>
          </CardItem>
          {
            (this.state.userId === this.state.comment.author.id)
              ? <View style={{ flexDirection: 'row', marginLeft: 0.2 * width }}>
                <Button
                  transparent
                  onPress={() => this.props.navigation.navigate('VoteCommentEdit',
                    { comment: this.state.comment,
                      text: this.state.comment.text,
                      comments: this.props.comments,
                      itemName: this.props.itemName,
                      itemId: this.props.itemId,
                      userId: this.props.userId,
                      voteId: this.props.voteId
                    })}
                >
                  <Text style={{ color: 'gray', fontSize: 0.03 * width }}>수정하기</Text>
                </Button>
                <Button
                  transparent
                  onPress={this.onClickDeleteButton}
                >
                  <Text style={{ color: 'gray', fontSize: 0.03 * width }}>삭제하기</Text>
                </Button>
              </View>
              : <View />
          }
          {
            (this.state.isDeleteReady)
              ? <VoteCommentDelete commentId={this.state.comment.id} onChangeIsDeleted={this.onChangeIsDeleted} />
              : <View />
          }
        </Card>
      </Item>
    )
  }
}
