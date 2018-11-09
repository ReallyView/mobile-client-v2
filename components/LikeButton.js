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

class clickLikeButton extends React.Component {
  render () {
    return (
      <Button first transparent
        style={{
          width: 0.4 * width,
          height: 0.06 * height,
          alignItems: 'center',
          justifyContent: 'center'
        }}
        active={this.props.isLiked}
        onPress={() => {
          this.props.mutate({
            variables: {
              reviewId: this.props.reviewId,
              userId: this.props.userId
            }
          })
            .then(result => {
              this.props.onClickLikeButton(result.data.likeReview)
            })
            .catch(error =>
              console.error(error))
        }}>
        <Text>좋아요 {this.props.likeNum}</Text>
      </Button>
    )
  }
}

export default graphql(gql`
  mutation ($reviewId: ID!, $userId: ID!) {
    likeReview(reviewId: $reviewId) {
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
`)(clickLikeButton)
