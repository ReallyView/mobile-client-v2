import React from 'react'
import {
  Spinner,
  Content
} from 'native-base'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import VoteCommentCard from './VoteCommentCard'

function showVoteCommentCards ({ data: { loading, votes } }) {
  if (loading) {
    return <Spinner color='gray' />
  } else {
    return (
      <Content>
        {
          votes.map((vote, index) => {
            return (
              <VoteCommentCard
                key={index}
                vote={vote}
              />
            )
          })
        }
      </Content>
    )
  }
}

export default graphql(gql`
  query ($itemId: ID!) {
    votes(itemId: $itemId) {
      comments {
        id
        author {
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
        itemId: props.itemId
      }
    })
  }
})(showVoteCommentCards)
