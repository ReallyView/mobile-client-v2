import React from 'react'
import {
  Content,
  Spinner
} from 'native-base'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import ReviewCard from './ReviewCard'

function showReviewCards ({ data: { loading, userInfo, variables } }) {
  if (loading) {
    return <Spinner color='gray' />
  } else {
    return (
      <Content>
        {
          userInfo.reviews.map((review) => {
            return (
              <ReviewCard
                review={review}
                key={review.id}
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
      },
      pollInterval: 500
    })
  }
})(showReviewCards)
