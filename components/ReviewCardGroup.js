import React from 'react'
import {
  Spinner,
  Content,
  View
} from 'native-base'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import ReviewCard from './ReviewCard'

function showReviewCards ({ data: { loading, reviews, variables } }) {
  if (loading) {
    return <Spinner color='gray' />
  } else {
    return (
      <Content>
        {
          reviews && reviews.length ? reviews.map((review, index) => {
            return (
              <ReviewCard
                review={review}
                key={index}
                onClickReviewCard={variables.onClickReviewCard} />
            )
          }) : <View />
        }
      </Content>
    )
  }
}

export default graphql(gql`
  query ($itemId: ID!, $userId: ID!) {
    reviews(itemId: $itemId) {
      id,
      title,
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
      }
    }
  }
`, {
  options: props => {
    return ({
      variables: {
        itemId: props.itemId,
        userId: props.userId,
        onClickReviewCard: props.onClickReviewCard
      },
      pollInterval: 100
    })
  }
})(showReviewCards)
