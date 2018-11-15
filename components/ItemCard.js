import React from 'react'
import {
  Card,
  List,
  Label,
  Item,
  View,
  Text
} from 'native-base'
import { Image, StyleSheet, AsyncStorage } from 'react-native'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import Layout from '../constants/Layout'

const width = Layout.window.width
const height = Layout.window.height

const ReviewImage = graphql(gql`
  mutation ($reviewId: ID!, $userId: ID!) {
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
      dislikeNum,
      likedBy (where: { id: $userId }) {
        id
      },
      dislikedBy (where: { id: $userId }) {
        id
      }
    }
  }
`)(goToReview)

function goToReview ({ mutate, reviewId, reviewTitle, reviewImgUrl, userId, navigation }) {
  return (
    <Item transparent
      style={styles.reviewContainer}
      onPress={() => mutate({
        variables: {
          reviewId: reviewId,
          userId: userId
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
      <Image style={styles.image}
        source={{ uri: reviewImgUrl }} />
      <Text style={styles.reviewTitle} numberOfLines={1}>{reviewTitle}</Text>
    </Item>
  )
}

export default class ItemCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userId: ''
    }
  }
  componentWillMount () {
    const getData = async () => {
      const getUserId = await AsyncStorage.getItem('userId')
      this.setState({
        userId: getUserId
      })
    }
    getData()
  }
  render () {
    if (!(this.props.item && this.state.userId)) {
      return <View />
    }
    let hasImage = false
    for (let i = 0; i < this.props.item.reviews.length; i++) {
      if (this.props.item.reviews[i].imgUrls.length > 0) {
        hasImage = true
        break
      }
    }
    if (!hasImage) {
      return <View />
    }
    return (
      <Item style={{ borderBottomWidth: 0 }}
        onPress={() => this.props.navigation.navigate('Item', {
          itemName: this.props.item.name,
          itemId: this.props.item.id,
          userId: this.state.userId })}>
        <Card style={styles.card}>
          <Label style={styles.title}>{this.props.item.name}</Label>
          <List horizontal dataArray={this.props.item.reviews} style={{ marginLeft: 0.01 * width }}
            renderRow={(review) => {
              if (review.imgUrls && review.imgUrls.length > 0) {
                return (
                  <ReviewImage
                    reviewId={review.id}
                    reviewImgUrl={review.imgUrls[0]}
                    reviewTitle={review.title}
                    userId={this.state.userId}
                    navigation={this.props.navigation} />)
              } else {
                return (<View />)
              }
            }} />
        </Card>
      </Item>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    margin: 0.03 * width,
    marginLeft: 0.05 * width,
    fontSize: 18
  },
  reviewContainer: {
    height: 0.5 * width,
    width: 0.6 * width,
    marginLeft: 0.01 * width,
    marginRight: 0.01 * width,
    borderBottomWidth: 0,
    flexDirection: 'column',
    borderRadius: 0.02 * width,
    backgroundColor: '#f1f2f6'
  },
  image: {
    height: 0.4 * width,
    width: 0.6 * width,
    marginLeft: 0.01 * width,
    marginRight: 0.01 * width,
    borderRadius: 0.02 * width
  },
  reviewTitle: {
    height: 0.1 * width,
    width: 0.6 * width,
    marginLeft: 0.01 * width,
    marginRight: 0.01 * width,
    padding: 0.03 * width,
    color: '#2f3542'
  },
  card: {
    marginTop: 0.01 * height,
    marginBottom: 0.01 * height,
    marginLeft: 0.02 * width,
    marginRight: 0.02 * width,
    paddingBottom: 0.01 * height,
    width: 0.95 * width
  }
})
