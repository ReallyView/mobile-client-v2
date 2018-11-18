import React from 'react'
import {
  Spinner,
  Content
} from 'native-base'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import VoteCard from './VoteCard'

function showVoteCards ({ data: { loading, userInfo, variables } }) {
  if (loading) {
    return <Spinner color='gray' />
  } else {
    return (
      <Content>
        {
          userInfo.votes.map((vote) => {
            return (
              <VoteCard
                vote={vote}
                key={vote.id}
              />
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
      votes {
        id
        voteInfo {
          id
          item {
            name
          }
          votedBy (where: { id: $userId }) {
            id
          }
          voteNum
        }
        author {
          id
          profileImgUrl
          name
        }
        text
        comments {
          id
        }
        createdAt
      }
    }
  }
`, {
  options: props => {
    return ({
      variables: {
        userId: props.userId
      }
    })
  }
})(showVoteCards)
