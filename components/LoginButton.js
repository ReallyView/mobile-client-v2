import React from 'react'
import gql from 'graphql-tag'
import { Button, Text, Toast } from 'native-base'
import { graphql } from 'react-apollo'

function login ({ mutate, finishLogin }) {
  let token = null
  return (
    <Button block
      style={{ margin: 15, marginTop: 50 }}
      onPress={() => {
        mutate()
          .then(result => {
            if (result.data.login.token) {
              token = result.data.login.token
            }
          })
          .catch(error => {
            console.log(error)
            Toast.show({
              text: 'Wrong password!',
              buttonText: 'Okay',
              type: 'warning'
            })
          })
        finishLogin(token)
      }}>
      <Text>Sign In</Text>
    </Button>
  )
}

export default graphql(gql`
  mutation login($email: String!, $password: String!) {
    login (email: $email, password: $password) {
      token
    }
  }
`, {
  options: props => {
    return ({
      variables: {
        email: props.email,
        password: props.password
      }
    })
  }
})(login)
