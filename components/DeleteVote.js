import React from 'react'
import { Form } from 'native-base'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

function deleteVote ({ mutate, finishDeleteVote, errorDeleteVote }) {
  mutate()
    .then(result => finishDeleteVote(result.data.deleteVote.id))
    .catch(error => errorDeleteVote(error))
  return (
    <Form />
  )
}

export default graphql(gql`
  mutation deleteVote($voteId: ID!) {
    deleteVote (voteId: $voteId) {
      id
    }
  }
`, {
  options: props => {
    return ({
      variables: {
        voteId: props.voteId
      }
    })
  }
})(deleteVote)
