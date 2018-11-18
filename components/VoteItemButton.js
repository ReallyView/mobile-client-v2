import React from 'react'
import { Button, Text, Card, View } from 'native-base'

import Layout from '../constants/Layout'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { StyleSheet } from 'react-native'

const width = Layout.window.width
const height = Layout.window.height

class VoteItemButton extends React.Component {
  render () {
    return (
      <Button
        transparent
        style={styles.voteInfo}
        bordered={this.props.isVoted}
        onPress={() => {
          this.props.mutate({
            variables: {
              voteInfoId: this.props.voteInfoId,
              userId: this.props.userId
            }
          })
            .then(result => {
              this.props.onClickVoteItem(result.data.vote)
            })
            .catch(error =>
              console.error(error))
        }}
      >
        <Text style={{ color: 'black' }}>{this.props.itemName}</Text>
        <View style={styles.voteBar}>
          <View style={{ flex: this.props.voteNum, backgroundColor: '#62B1F6' }} />
          <View style={{ flex: this.props.totalVoteNum - this.props.voteNum }} />
        </View>
        <Text style={{ color: 'black' }}>{this.props.voteNum}</Text>
      </Button>
    )
  }
}

export default graphql(gql`
  mutation ($voteInfoId: ID!, $userId: ID!) {
    vote(voteInfoId: $voteInfoId) {
      id
      voteNum
      votedBy (where: { id: $userId }) {
        id
      }
    }
  }
`)(VoteItemButton)

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
