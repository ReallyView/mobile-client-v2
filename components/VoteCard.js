import React from 'react'
import { Card, Item, View, Text, Left, Thumbnail, Right, Button, Icon } from 'native-base'
import { Alert, AsyncStorage } from 'react-native'
import VoteItemButton from './VoteItemButton'
import Layout from '../constants/Layout'
import DeleteVote from './DeleteVote'

const width = Layout.window.width
const height = Layout.window.height

export default class ReviewCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      vote: this.props.vote,
      isDeleted: false,
      isDeleteReady: false,
      isError: false
    }
    this.onClickVoteItem1 = this.onClickVoteItem1.bind(this)
    this.onClickVoteItem2 = this.onClickVoteItem2.bind(this)
    this.finishDeleteVote = this.finishDeleteVote.bind(this)
    this.errorDeleteVote = this.errorDeleteVote.bind(this)
    this.onChangeDeleteReady = this.onChangeDeleteReady.bind(this)
    this.onClickDeleteButton = this.onClickDeleteButton.bind(this)
  }
  componentWillMount () {
    const getData = async () => {
      const getUserId = await AsyncStorage.getItem('userId')
      this.setState({
        userId: getUserId
      })
    }
    getData()
    this.setState({
      voteNum1: this.props.vote.voteInfo[0].voteNum,
      voteNum2: this.props.vote.voteInfo[1].voteNum,
      totalVoteNum: this.props.vote.voteInfo[0].voteNum + this.props.vote.voteInfo[1].voteNum,
      isVoted1: this.props.vote.voteInfo[0].votedBy.length > 0,
      isVoted2: this.props.vote.voteInfo[1].votedBy.length > 0
    })
    // 댓글을 삭제한 다음 삭제한 댓글의 author가 null로 출력되어 뒤에서 에러를 발생시킴, 그래서 author가 null인 원소를 제외시킴
    let tempComments = []
    for (let i = 0; i < this.state.vote.comments.length; i++) {
      if (this.state.vote.comments[i].author === null) {
        continue
      } else {
        tempComments = tempComments.concat(this.state.vote.comments[i])
      }
    }
    this.setState({
      vote: {
        ...this.state.vote,
        comments: tempComments
      }
    })
    this.setState({
      vote: {
        ...this.state.vote,
        comments: this.props.navigation.getParam('comments') || this.state.vote.comments
      }
    })
  }
  onClickVoteItem1 (voteItem1) {
    if (this.state.isVoted2) {
      this.setState({
        voteNum2: this.state.voteNum2 - 1
      })
    }
    let tempVoteInfo = this.state.vote.voteInfo
    tempVoteInfo[0].voteNum = voteItem1.voteNum
    tempVoteInfo[0].votedBy = voteItem1.votedBy
    this.setState({
      vote: {
        ...this.state.vote,
        voteInfo: tempVoteInfo
      },
      voteNum1: tempVoteInfo[0].voteNum,
      totalVoteNum: tempVoteInfo[0].voteNum + this.state.voteNum2,
      isVoted1: !this.state.isVoted1,
      isVoted2: false
    })
  }
  onClickVoteItem2 (voteItem2) {
    if (this.state.isVoted1) {
      this.setState({
        voteNum1: this.state.voteNum1 - 1
      })
    }
    let tempVoteInfo = this.state.vote.voteInfo
    tempVoteInfo[1].voteNum = voteItem2.voteNum
    tempVoteInfo[1].votedBy = voteItem2.votedBy
    this.setState({
      vote: {
        ...this.state.vote,
        voteInfo: tempVoteInfo
      },
      voteNum2: tempVoteInfo[1].voteNum,
      totalVoteNum: this.state.voteNum1 + tempVoteInfo[1].voteNum,
      isVoted1: false,
      isVoted2: !this.state.isVoted2
    })
  }
  finishDeleteVote (reviewId) {
    this.setState({
      isDeleted: true
    })
  }
  errorDeleteVote (error) {
    console.log(error)
    this.setState({
      isError: true
    })
  }
  onChangeDeleteReady () {
    this.setState({
      isDeleteReady: true
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
          onPress: this.onChangeDeleteReady
        }
      ]
    )
  }
  render () {
    if (!this.props.vote) {
      return <View />
    }
    if (this.state.isDeleted) {
      return (
        <Card style={{ width: 0.95 * width, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ margin: 0.05 * height }}>삭제되었습니다.</Text>
        </Card>
      )
    }
    if (this.state.isError) {
      return (
        <Card style={{ width: 0.95 * width, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ margin: 0.05 * height }}>이미 삭제된 투표입니다.</Text>
        </Card>
      )
    }
    return (
      <Item style={{ borderBottomWidth: 0 }}>
        <Card style={{ width: 0.95 * width }}>
          <View style={{ flexDirection: 'row' }}>
            <Left style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Thumbnail square small
                style={{ margin: 0.02 * width, marginLeft: 0.04 * width }}
                source={{
                  uri: (this.state.vote.author.profileImgUrl)
                    ? (this.state.vote.author.profileImgUrl)
                    : 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} />
              <Text style={{ margin: 0.02 * width }}>{this.state.vote.author.name}</Text>
              {
                (this.state.userId === this.state.vote.author.id)
                  ? <Right>
                    <Button
                      transparent
                      onPress={this.onClickDeleteButton}
                    >
                      <Icon name={'md-trash'} style={{ color: 'gray' }} />
                    </Button>
                  </Right>
                  : <View />
              }
            </Left>
          </View>
          <Text style={{ margin: 0.03 * width }}>{this.state.vote.text}</Text>
          <VoteItemButton
            voteInfoId={this.state.vote.voteInfo[0].id}
            isVoted={this.state.isVoted1}
            itemName={this.state.vote.voteInfo[0].item.name}
            voteNum={this.state.voteNum1}
            totalVoteNum={this.state.totalVoteNum}
            onClickVoteItem={this.onClickVoteItem1}
            userId={this.state.userId}
          />
          <VoteItemButton
            voteInfoId={this.state.vote.voteInfo[1].id}
            isVoted={this.state.isVoted2}
            itemName={this.state.vote.voteInfo[1].item.name}
            voteNum={this.state.voteNum2}
            totalVoteNum={this.state.totalVoteNum}
            onClickVoteItem={this.onClickVoteItem2}
            userId={this.state.userId}
          />
          <Button
            transparent
            onPress={() =>
              this.props.navigation.navigate('VoteComment',
                { itemName: this.props.itemName,
                  itemId: this.props.itemId,
                  userId: this.props.userId,
                  voteId: this.props.vote.id,
                  comments: this.state.vote.comments
                })
            }
          >
            <Text>댓글달기</Text>
          </Button>
        </Card>
        {
          (this.state.isDeleteReady)
            ? <DeleteVote finishDeleteVote={this.finishDeleteVote} errorDeleteVote={this.errorDeleteVote} voteId={this.state.vote.id} />
            : <View />
        }
      </Item>
    )
  }
}
