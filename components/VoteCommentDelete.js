import React from 'react'
import { Form } from 'native-base'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

function deleteComment ({ mutate, onChangeIsDeleted }) {
  mutate()
    .then(result => onChangeIsDeleted())
  return (
    <Form />
  )
}

export default graphql(gql`
  mutation deleteComment($commentId: ID!) {
    deleteComment (commentId: $commentId) {
      id
      text
      author {
        id
        name
        email
        profileImgUrl
      }
    }
  }
`, {
  options: props => {
    return ({
      variables: {
        commentId: props.commentId
      }
    })
  }
})(deleteComment)
