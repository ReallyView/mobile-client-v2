import React from 'react'
import {
  Text,
  Content
} from 'native-base'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import ReviewCard from './ReviewCard'

function showReviewCards ({ data: { loading, userInfo, variables } }) {
  if (loading) {
    return <Text>Loading...</Text>
  } else {
    return (
      <Content>
        {
          userInfo.reviews.map((review, index) => {
            return (
              <ReviewCard
                review={review}
                key={index}
                onClickReviewCard={variables.onClickReviewCard} />
            )
          })
        }
      </Content>
    )
  }
}

export default graphql(gql`
  query ($userId: ID!) {
    userInfo(userId: $userId) {
      reviews {
        id
        title
        author {
          id,
          profileImgUrl,
          name
        },
        imgUrls,
        text,
        grades {
          id,
          name,
          starNum
        },
        likeNum,
        dislikeNum,
        likedBy (where: { id: $userId }) {
          id
        },
        dislikedBy (where: { id: $userId }) {
          id
        },
        on {
          id,
          name
        }
      }
    }
  }
`, {
  options: props => {
    return ({
      variables: {
        userId: props.userId,
        onClickReviewCard: props.onClickReviewCard
      }
    })
  }
})(showReviewCards)
