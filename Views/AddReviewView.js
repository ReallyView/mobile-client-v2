import React from 'react'
import { Container } from 'native-base'
import AddReviewHeader from '../components/AddReviewHeader'
import AddReviewContent from '../components/AddReviewContent'

export default class AddReviewView extends React.Component {
  render () {
    return (
      <Container>
        <AddReviewHeader navigation={this.props.navigation} />
        <AddReviewContent />
      </Container>
    )
  }
}
