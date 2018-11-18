import React from 'react'
import {
  Spinner,
  Content,
  Tabs,
  Tab
} from 'native-base'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import ReviewCard from './ReviewCard'

function showReviewCards ({ data: { loading, userInfo, variables } }) {
  if (loading) {
    return <Spinner color='gray' />
  } else {
    return (
      <Tabs>
        <Tab heading='좋아요'>
          <Content>
            {
              userInfo.likedReviews.map((review) => {
                return (
                  <ReviewCard
                    review={review}
                    key={review.id}
                    onClickReviewCard={variables.onClickReviewCard} />
                )
              })
            }
          </Content>
        </Tab>
        <Tab heading='싫어요'>
          <Content>
            {
              userInfo.dislikedReviews.map((review, index) => {
                return (
                  <ReviewCard
                    review={review}
                    key={index}
                    onClickReviewCard={variables.onClickReviewCard} />
                )
              })
            }
          </Content>
        </Tab>
      </Tabs>
    )
  }
}

export default graphql(gql`
  query ($userId: ID!) {
    userInfo(userId: $userId) {
      likedReviews {
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
      },
      dislikedReviews {
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
