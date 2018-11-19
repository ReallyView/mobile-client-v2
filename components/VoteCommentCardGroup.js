import React from 'react'
import { Spinner, Content } from 'native-base'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import VoteCommentCards from './VoteCommentCards'

function showVoteCommentCards ({ data: { loading, votes }, userId }) {
  if (loading) {
    return <Spinner color='gray' />
  } else {
    return (
      <Content>
        {
          votes.map((vote, index) => {
            return (
              <VoteCommentCards
                vote={vote}
                key={index}
                userId={userId}
              />
            )
          })
        }
      </Content>
    )
  }
}

export default graphql(gql`
  query ($itemId: ID!, $userId: ID!) {
    votes(itemId: $itemId) {
      comments {
        id
        author {
          id
          name
          email
          profileImgUrl
        }
        text
      }
    }
  }
`, {
  options: props => {
    return ({
      variables: {
        itemId: props.itemId,
        userId: props.userId
      }
    })
  }
})(showVoteCommentCards)
