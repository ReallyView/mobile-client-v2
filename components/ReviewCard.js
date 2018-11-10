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
  Right,
  Segment
} from 'native-base'
import { AsyncStorage, Image, StyleSheet } from 'react-native'
import DeleteReview from './DeleteReview'
import LikeButton from './LikeButton'
import DislikeButton from './DislikeButton'

import Layout from '../constants/Layout'

const width = Layout.window.width
const height = Layout.window.height

export default class ReviewCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      review: this.props.review,
      likeNum: this.props.review.likeNum,
      dislikeNum: this.props.review.dislikeNum,
      isLiked: this.props.review.likedBy.length > 0,
      isDisliked: this.props.review.dislikedBy.length > 0,
      isDeleted: false,
      isError: false
    }
    this.onClickLikeButton = this.onClickLikeButton.bind(this)
    this.onClickDislikeButton = this.onClickDislikeButton.bind(this)
    this.finishDeleteReview = this.finishDeleteReview.bind(this)
    this.errorDeleteReview = this.errorDeleteReview.bind(this)
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
  finishDeleteReview (reviewId) {
    this.setState({
      isDeleted: true
    })
  }
  errorDeleteReview (error) {
    console.log(error)
    this.setState({
      isError: true
    })
  }
  render () {
    if (!this.props.review) {
      return <View />
    }
    if (this.state.isDeleted) {
      return (
        <Card style={{ width: 0.95 * width, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ margin: 0.05 * height }}>삭제되었습니다.</Text>
        </Card>
      )
    }
    if (this.state.isError) {
      return (
        <Card style={{ width: 0.95 * width, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ margin: 0.05 * height }}>이미 삭제된 게시글입니다.</Text>
        </Card>
      )
    }
    return (
      <Item style={{ borderBottomWidth: 0 }}
        onPress={() => this.props.onClickReviewCard(this.props.review)}>
        <Card style={{ width: 0.95 * width }}>
          <View style={{ flexDirection: 'row' }}>
            <Left style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Thumbnail square small
                style={{ margin: 0.02 * width, marginLeft: 0.04 * width }}
                source={{
                  uri: (this.props.review.author.profileImgUrl)
                    ? (this.props.review.author.profileImgUrl)
                    : 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} />
              <Text style={{ margin: 0.02 * width }}>{this.props.review.author.name}</Text>
              {
                (this.state.userId === this.props.review.author.id)
                  ? <Right>
                    <DeleteReview reviewId={this.props.review.id}
                      finishDeleteReview={this.finishDeleteReview}
                      errorDeleteReview={this.errorDeleteReview} />
                  </Right>
                  : <View />
              }
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
