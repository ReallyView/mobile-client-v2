import React from 'react'
import gql from 'graphql-tag'
import { Button, Text, Toast } from 'native-base'
import { graphql } from 'react-apollo'
import { AsyncStorage } from 'react-native'

function login ({ mutate, finishLogin }) {
  let token = null
  let email = null
  let name = null
  let profileImgUrl = null
  return (
    <Button block
      style={{ margin: 15, marginTop: 50 }}
      onPress={() => {
        mutate()
          .then(result => {
            if (result.data.login.token) {
              token = result.data.login.token
              email = result.data.login.user.email
              name = result.data.login.user.name
              profileImgUrl = result.data.login.user.profileImgUrl
            }
          })
          .catch(error => {
            console.log(error)
            Toast.show({
              text: 'Wrong password!',
              buttonText: 'Okay',
              type: 'warning'
            })
          }).then(() => {
          finishLogin(token, email, name, profileImgUrl)
        })
      }}>
      <Text>Sign In</Text>
    </Button>
  )
}

export default graphql(gql`
  mutation login($email: String!, $password: String!) {
    login (email: $email, password: $password) {
      token
      user {
        email
        name
        profileImgUrl
      }
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
