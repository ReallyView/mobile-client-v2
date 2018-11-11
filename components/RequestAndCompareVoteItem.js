import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Form } from 'native-base'

function createVote ({ mutate, navigation }) {
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
  mutation createVote($data: VoteCreateInput!) {
    createVote(data: $data) {
      id
      text
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
})(createVote)
