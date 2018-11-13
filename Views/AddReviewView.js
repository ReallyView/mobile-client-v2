import React from 'react'
import { Container } from 'native-base'
import Headers from '../components/Headers'
import AddReviewContent from '../components/AddReviewContent'

export default class AddReviewView extends React.Component {
  render () {
    return (
      <Container>
        <Headers navigation={this.props.navigation} headerTitle={'리뷰추가'} navigate={'Home'} hasTabs />
        <AddReviewContent navigation={this.props.navigation} />
      </Container>
    )
  }
}
