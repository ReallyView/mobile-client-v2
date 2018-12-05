import React from 'react'
import { Button, Text } from 'native-base'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

function sendSubscribe ({ mutate}) {
  return (
    <Button transparent
      onPress={() =>
        mutate()
      }>
      <Text>구독하기</Text>
    </Button>
  )
}

export default graphql(gql`
  mutation subscribeItem($itemId: ID!) {
    subscribeItem (itemId: $itemId) {
      id
    }
  }
`, {
  options: props => {
    return ({
      variables: {
        itemId: props.itemId
      }
    })
  }
})(sendSubscribe)
