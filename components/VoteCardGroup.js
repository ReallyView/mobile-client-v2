import React from 'react'
import {
  Spinner,
  Content
} from 'native-base'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import VoteCard from './VoteCard'

function showVoteCards ({ data: { loading, votes, variables }, itemName, itemId, userId, navigation }) {
  if (loading) {
    return <Spinner color='gray' />
  } else {
    return (
      <Content>
        {
          votes.map((vote) => {
            return (
              <VoteCard
                vote={vote}
                key={vote.id}
                itemName={itemName}
                itemId={itemId}
                userId={userId}
                navigation={navigation}
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
        author {
          id
          name
          email
          profileImgUrl
        }
        text
      }
      createdAt
    }
  }
`, {
  options: props => {
    return ({
      variables: {
        itemId: props.itemId,
        userId: props.userId
      },
      pollInterval: 500
    })
  }
})(showVoteCards)
