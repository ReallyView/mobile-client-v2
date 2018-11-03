import React from 'react'
import { Container } from 'native-base'
import AddReviewHeader from '../components/AddReviewHeader'
export default class AddReviewView extends React.Component {
  render () {
    return (
      <Container>
        <AddReviewHeader navigation={this.props.navigation} />
      </Container>
    )
  }
}
