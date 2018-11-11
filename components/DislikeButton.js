import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import React from 'react'
import {
  Button,
  Text
} from 'native-base'

import Layout from '../constants/Layout'

const width = Layout.window.width
const height = Layout.window.height

class clickDislikeButton extends React.Component {
  render () {
    return (
      <Button last transparent
        style={{
          width: 0.43 * width,
          height: 0.05 * height,
          alignItems: 'center',
          justifyContent: 'center'
        }}
        active={this.props.isDisliked}
        onPress={() => {
          this.props.mutate({
            variables: {
              reviewId: this.props.reviewId,
              userId: this.props.userId
            }
          })
            .then(result => {
              this.props.onClickDislikeButton(result.data.dislikeReview)
            })
            .catch(error =>
              console.error(error))
        }}>
        <Text>싫어요 {this.props.dislikeNum}</Text>
      </Button>
    )
  }
}

export default graphql(gql`
  mutation ($reviewId: ID!, $userId: ID!) {
    dislikeReview(reviewId: $reviewId) {
      likeNum
      dislikeNum
      likedBy (where: { id: $userId }) {
        id
      }
      dislikedBy (where: { id: $userId }) {
        id
      }
    }
  }
`)(clickDislikeButton)
