import React from 'react'
import gql from 'graphql-tag'
import { Button, Text, Toast } from 'native-base'
import { graphql } from 'react-apollo'

import Layout from '../constants/Layout'

const height = Layout.window.height

function login ({ mutate, finishLogin }) {
  let token = null
  let email = null
  let name = null
  let profileImgUrl = null
  let userId = null
  return (
    <Button block bordered
      style={{ margin: 15, marginTop: 0.1 * height }}
      onPress={() => {
        mutate()
          .then(result => {
            if (result.data.login.token) {
              token = result.data.login.token
              email = result.data.login.user.email
              name = result.data.login.user.name
              profileImgUrl = result.data.login.user.profileImgUrl
              userId = result.data.login.user.id
            }
          })
          .catch(error => {
            console.log(error)
            Toast.show({
              text: '로그인에 실패햐였습니다',
              buttonText: 'Okay',
              type: 'danger'
            })
          }).then(() => {
            finishLogin(token, email, name, profileImgUrl, userId)
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
        id
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
