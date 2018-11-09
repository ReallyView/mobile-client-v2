import React from 'react'
import {
  Card,
  List,
  Button,
  Text,
  Item,
  View,
  Thumbnail,
  Left,
  Segment
} from 'native-base'
import { AsyncStorage, Image, StyleSheet } from 'react-native'
import LikeButton from './LikeButton'
import DislikeButton from './DislikeButton'

import Layout from '../constants/Layout'

const width = Layout.window.width

export default class ReviewCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      review: this.props.review,
      likeNum: this.props.review.likeNum,
      dislikeNum: this.props.review.dislikeNum,
      isLiked: this.props.review.likedBy.length > 0,
      isDisliked: this.props.review.dislikedBy.length > 0
    }
    this.onClickLikeButton = this.onClickLikeButton.bind(this)
    this.onClickDislikeButton = this.onClickDislikeButton.bind(this)
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
  onClickLikeButton (likeReview) {
    this.setState({
      review: {
        ...this.props.review,
        dislikedBy: likeReview.dislikedBy,
        likeNum: likeReview.likeNum,
        dislikeNum: likeReview.dislikeNum
      },
      isLiked: !this.state.isLiked,
      isDisliked: false
    })
  }
  onClickDislikeButton (dislikeReview) {
    this.setState({
      review: {
        ...this.state.review,
        likedBy: dislikeReview.likedBy,
        likeNum: dislikeReview.likeNum,
        dislikeNum: dislikeReview.dislikeNum
      },
      isLiked: false,
      isDisliked: !this.state.isDisliked
    })
  }
  render () {
    if (!this.props.review) {
      return <View />
    }
    return (
      <Item onPress={() => this.props.onClickReviewCard(this.props.review)}>
        <Card>
          <View style={{ flexDirection: 'row' }}>
            <Left style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Thumbnail square small
                style={{ margin: 0.02 * width, marginLeft: 0.04 * width }}
                source={{
                  uri: (this.props.review.author.profileImgUrl)
                    ? (this.props.review.author.profileImgUrl)
                    : 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} />
              <Text style={{ margin: 0.02 * width }}>{this.props.review.author.name}</Text>
            </Left>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{this.props.review.title}</Text>
          </View>
          <List horizontal dataArray={this.props.review.imgUrls}
            renderRow={(imgUrl) =>
              <Button transparent style={styles.itemImage}>
                <Image
                  source={{ uri: imgUrl }} style={styles.itemImage} />
              </Button>} />
          <View style={styles.likeButtonContainer}>
            <Segment>
              <LikeButton
                reviewId={this.state.review.id}
                isLiked={this.state.isLiked}
                likeNum={this.state.review.likeNum}
                onClickLikeButton={this.onClickLikeButton}
                userId={this.state.userId} />
              <DislikeButton
                reviewId={this.state.review.id}
                isDisliked={this.state.isDisliked}
                dislikeNum={this.state.review.dislikeNum}
                onClickDislikeButton={this.onClickDislikeButton}
                userId={this.state.userId} />
            </Segment>
          </View>
          <Text numberOfLines={5} style={styles.text}>{this.props.review.text}</Text>
        </Card>
      </Item>
    )
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    padding: 0.03 * width,
    marginBottom: 0.02 * width,
    marginLeft: 0.04 * width,
    marginRight: 0.04 * width,
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
    borderColor: '#bdc3c7'
  },
  title: {
    fontSize: 20
  },
  itemImage: {
    height: 0.35 * width,
    width: 0.5 * width,
    marginLeft: 0.02 * width,
    marginRight: 0.02 * width
  },
  starImage: {
    width: 0.3 * width,
    height: 0.05 * width
  },
  likeButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 3
  },
  text: {
    margin: 0.03 * width
  }
})
