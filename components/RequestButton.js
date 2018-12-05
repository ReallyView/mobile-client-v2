import React from 'react'
import gql from 'graphql-tag'
import { Button, Text } from 'native-base'
import { graphql } from 'react-apollo'
import Layout from '../constants/Layout'

const height = Layout.window.height

function requestVote ({ mutate, navigation }) {
  return (
    <Button block bordered
      style={{ margin: 0.03 * height }}
      onPress={() => {
        mutate()
          .then(result => {
            navigation.navigate('Home')
          })
          .catch(error => {
            console.log(error)
          })
      }}>
      <Text>투표 제출하기</Text>
    </Button>
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
})(requestVote)
