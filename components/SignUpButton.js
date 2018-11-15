import React from 'react'
import gql from 'graphql-tag'
import { Button, Text, Toast } from 'native-base'
import { graphql } from 'react-apollo'

function signUp ({ mutate, finishSignUp }) {
  return (
    <Button block bordered
      style={{ margin: 15, marginTop: 50 }}
      onPress={() => {
        mutate()
          .then(result => {
            Toast.show({
              text: '회원가입에 성공하였습니다',
              buttonText: 'Okay',
              type: 'success'
            })
            finishSignUp()
          })
          .catch(error => {
            console.log(error)
            Toast.show({
              text: '회원가입에 실패하였습니다',
              buttonText: 'Okay',
              type: 'danger'
            })
          })
      }}>
      <Text>Sign Up</Text>
    </Button>
  )
}

export default graphql(gql`
  mutation signup($email: String!, $password: String!, $name: String!) {
    signup (email: $email, password: $password, name: $name) {
      token
      user {
        id
      }
    }
  }
`, {
  options: props => {
    return ({
      variables: {
        email: props.email,
        password: props.password,
        name: props.name
      }
    })
  }
})(signUp)
