import React, { Component } from 'react'
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Icon,
  Button
} from 'native-base'

import ReviewCardGroup from '../components/ReviewCardGroup'

export default class ItemView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      itemName: this.props.navigation.getParam('itemName'),
      itemId: this.props.navigation.getParam('itemId')
    }
    this.onClickReviewCard = this.onClickReviewCard.bind(this)
  }
  onClickReviewCard (review) {
    this.props.navigation.navigate('Review', {
      itemName: this.state.itemName,
      itemId: this.state.itemId,
      review: review
    })
  }
  render () {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('Home')}>
              <Icon
                name={'arrow-back'} />
            </Button>
          </Left>
          <Body>
            <Title>{this.state.itemName}</Title>
          </Body>
          <Right />
        </Header>
        <Body>
          <ReviewCardGroup itemId={this.state.itemId} onClickReviewCard={this.onClickReviewCard} />
        </Body>
      </Container>
    )
  }
}
