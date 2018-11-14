import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Form } from 'native-base'

function updateProfile ({ mutate, navigation }) {
  mutate().catch(error => {
    console.log(error)
  }).then((result) => {
    navigation.navigate('ChangeProfile')
  })
  return (
    <Form />
  )
}

export default graphql(gql`
  mutation updateProfile($email: String, $name: String) {
    updateProfile(email: $email, name: $name) {
      id
    }
  }
`, {
  options: props => {
    return ({
      variables: {
        email: props.email,
        name: props.name
      }
    })
  }
})(updateProfile)
