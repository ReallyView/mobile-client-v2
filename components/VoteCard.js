import React from 'react'
import {
  Card,
  Item,
  View,
  Text, Left, Thumbnail, Button
} from 'native-base'
import { AsyncStorage, StyleSheet } from 'react-native'
import VoteItemButton from './VoteItemButton'
import Layout from '../constants/Layout'

const width = Layout.window.width
const height = Layout.window.height

export default class ReviewCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      vote: this.props.vote
    }
    this.onClickVoteItem1 = this.onClickVoteItem1.bind(this)
    this.onClickVoteItem2 = this.onClickVoteItem2.bind(this)
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
  }
  onClickVoteItem1 (voteItem1) {
    let tempVoteInfo = this.state.vote.voteInfo
    tempVoteInfo[0].voteNum = voteItem1.voteNum
    tempVoteInfo[0].votedBy = voteItem1.votedBy
    this.setState({
      vote: {
        ...this.state.vote,
        voteInfo: tempVoteInfo
      },
      voteNum1: tempVoteInfo[0].voteNum,
      totalVoteNum: tempVoteInfo[0].voteNum + this.props.vote.voteInfo[1].voteNum,
      isVoted1: !this.state.isVoted1,
      isVoted2: false
    })
  }
  onClickVoteItem2 (voteItem2) {
    let tempVoteInfo = this.state.vote.voteInfo
    tempVoteInfo[1].voteNum = voteItem2.voteNum
    tempVoteInfo[1].votedBy = voteItem2.votedBy
    this.setState({
      vote: {
        ...this.state.vote,
        voteInfo: tempVoteInfo
      },
      voteNum2: tempVoteInfo[1].voteNum,
      totalVoteNum: this.props.vote.voteInfo[0].voteNum + tempVoteInfo[1].voteNum,
      isVoted1: false,
      isVoted2: !this.state.isVoted2
    })
  }
  render () {
    if (!this.props.vote) {
      return <View />
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
        </Card>
      </Item>
    )
  }
}

const styles = StyleSheet.create({
  voteInfo: {
    flexDirection: 'row',
    width: 0.9 * width,
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 0.02 * width
  },
  voteBar: {
    flexDirection: 'row',
    width: 0.5 * width,
    height: 0.02 * height,
    borderWidth: 1,
    borderColor: '#bdc3c7',
    borderRadius: 0.005 * height
  }
})
