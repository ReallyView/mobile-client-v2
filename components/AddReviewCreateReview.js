import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Form } from 'native-base'

function createReview ({ mutate, navigation }) {
  mutate().catch(error => {
    console.log(error)
  }).then((result) => {
    navigation.navigate('Home')
  })
  return (
    <Form />
  )
}

export default graphql(gql`
  mutation createReview($data: ReviewCreateInput!) {
    createReview(data: $data) {
      id
      title
    }
  }
`, {
  options: props => {
    return ({
      variables: {
        data: props.data
      }
    })
  }
})(createReview)
