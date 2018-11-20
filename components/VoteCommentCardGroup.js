import React from 'react'
import { Content } from 'native-base'
import VoteCommentCard from './VoteCommentCard'

export default class VoteCommentCardGroup extends React.Component {
  render () {
    return (
      <Content>
        {
          this.props.comments.map((comment, index) => {
            return (
              <VoteCommentCard
                key={index}
                comment={comment}
                comments={this.props.comments}
                itemName={this.props.itemName}
                itemId={this.props.itemId}
                userId={this.props.userId}
                voteId={this.props.voteId}
                navigation={this.props.navigation}
              />
            )
          })
        }
      </Content>
    )
  }
}
