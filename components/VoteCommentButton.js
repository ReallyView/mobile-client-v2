import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import React from 'react'
import { Button, Icon, Input, Item, Form } from 'native-base'

import Layout from '../constants/Layout'

const width = Layout.window.width
const height = Layout.window.height

class ClickSubmitButton extends React.Component {
  render () {
    return (
      <Item style={{ width: width }}>
        <Input
          placeholder='댓글을 입력하세요.'
          onChangeText={(text) => this.props.onChangeText(text)}
        />
        {
          (this.props.text)
            ? <Button
              transparent
              style={{ marginTop: 0.02 * width, marginRight: 0.04 * width }}
              onPress={() => {
                this.props.mutate({
                  variables: {
                    voteId: this.props.voteId,
                    text: this.props.text
                  }
                })
                  .catch(error =>
                    console.error(error))
              }}
            >
              <Icon name={'ios-arrow-forward-outline'} />
            </Button>
            : <Form />
        }
      </Item>
    )
  }
}

export default graphql(gql`
  mutation ($voteId: ID!, $text: String!) {
    createComment(voteId: $voteId, text: $text) {
      id
      author {
        id
        name
        email
        profileImgUrl
      }
      text
    }
  }
`)(ClickSubmitButton)
