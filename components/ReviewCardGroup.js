import React from 'react'
import {
  Text,
  Content
} from 'native-base'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import ReviewCard from './ReviewCard'

function showReviewCards ({ data: { loading, reviews, variables } }) {
  if (loading) {
    return <Text>Loading...</Text>
  } else {
    return (
      <Content>
        {
          reviews.map((review, index) => {
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
  query ($itemId: ID!) {
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
      dislikeNum
    }
  }
`, {
  options: props => {
    return ({
      variables: {
        itemId: props.itemId,
        onClickReviewCard: props.onClickReviewCard
      }
    })
  }
})(showReviewCards)
