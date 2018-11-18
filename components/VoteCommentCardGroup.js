import React from 'react'
import {
  Spinner,
  Content
} from 'native-base'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import VoteCommentCard from './VoteCommentCard'

export default class VoteCommentCardGroup extends React.Component {
  render () {
    return (
      <Content>
        {
          this.props.comments.map((comment, index) => {
            return (
              <VoteCommentCard comment={comment} key={index} />
            )
          })
        }
      </Content>
    )
  }
}
