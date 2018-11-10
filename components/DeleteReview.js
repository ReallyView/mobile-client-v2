import React from 'react'
import { Icon, Button } from 'native-base'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

function deleteReview ({ mutate, finishDeleteReview, errorDeleteReview }) {
  return (
    <Button transparent
      onPress={() =>
        mutate()
          .then(result => finishDeleteReview(result.data.deleteReview.id))
          .catch(error => errorDeleteReview(error))
      }>
      <Icon name={'md-trash'} style={{ color: 'gray' }} />
    </Button>
  )
}

export default graphql(gql`
  mutation deleteReview($reviewId: ID!) {
    deleteReview (reviewId: $reviewId) {
      id
    }
  }
`, {
  options: props => {
    return ({
      variables: {
        reviewId: props.reviewId
      }
    })
  }
})(deleteReview)
