import React from 'react'
import {
  Card,
  List,
  Button,
  Label,
  Item,
  View
} from 'native-base'
import { Image, StyleSheet } from 'react-native'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import Layout from '../constants/Layout'

const width = Layout.window.width
const height = Layout.window.height

const ReviewImage = graphql(gql`
  mutation ($reviewId: ID!) {
    seeReview(reviewId: $reviewId) {
      id,
      title,
      author {
        id,
        profileImgUrl,
        name
      },
      imgUrls,
      text,
      grades {
        id,
        name,
        starNum
      },
      likeNum,
      dislikeNum
    }
  }
`)(goToReview)

function goToReview ({ mutate, reviewId, reviewImgUrl, navigation }) {
  return (
    <Button transparent
      style={styles.imageStyle}
      onPress={() => mutate({
        variables: {
          reviewId: reviewId
        }
      })
        .then(result => {
          navigation.navigate('Review', {
            review: result.data.seeReview
          })
        })
        .catch(error => {
          console.error(error)
        })}>
      <Image style={styles.imageStyle}
        source={{ uri: reviewImgUrl }} />
    </Button>
  )
}

export default class ItemCard extends React.Component {
  render () {
    if (!this.props.item) {
      return <View />
    }
    return (
      <Item onPress={() => this.props.navigation.navigate('Item', { itemName: this.props.item.name, itemId: this.props.item.id })}>
        <Card style={styles.cardStyle}>
          <Label style={styles.titleStyle}>{this.props.item.name}</Label>
          <List horizontal dataArray={this.props.item.reviews}
            renderRow={(review) => {
              return (
                <ReviewImage
                  reviewId={review.id}
                  reviewImgUrl={review.imgUrls[0]}
                  navigation={this.props.navigation} />)
            }} />
        </Card>
      </Item>
    )
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    margin: 0.03 * width,
    marginLeft: 0.05 * width,
    fontSize: 18
  },
  imageStyle: {
    height: 0.35 * width,
    width: 0.5 * width,
    marginLeft: 0.02 * width,
    marginRight: 0.02 * width
  },
  cardStyle: {
    marginTop: 0.01 * height,
    marginBottom: 0.01 * height,
    marginLeft: 0.02 * width,
    marginRight: 0.02 * width,
    paddingBottom: 0.02 * height
  }
})
