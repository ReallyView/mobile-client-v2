import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import React from 'react'
import { Form } from 'native-base'

function submitComment ({ mutate, finishSubmitComment }) {
  mutate()
    .then(result => finishSubmitComment(result.data.createComment))
  return (
    <Form />
  )
}

export default graphql(gql`
  mutation ($voteId: ID!, $text: String!) {
    createComment(voteId: $voteId, text: $text) {
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
`, {
  options: props => {
    return ({
      variables: {
        voteId: props.voteId,
        text: props.text
      }
    })
  }
})(submitComment)
