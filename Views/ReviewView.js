import React, { Component } from 'react'
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Icon,
  Button,
  Thumbnail,
  View,
  Text,
  List,
  ListItem,
  Content,
  Segment
} from 'native-base'
import { AsyncStorage, Image, StyleSheet, Modal, Platform, StatusBar } from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer'

import Layout from '../constants/Layout'
import LikeButton from '../components/LikeButton'
import DislikeButton from '../components/DislikeButton'

const width = Layout.window.width

const starImages = [
  require('../assets/images/GradeStars/1-star.png'),
  require('../assets/images/GradeStars/2-star.png'),
  require('../assets/images/GradeStars/3-star.png'),
  require('../assets/images/GradeStars/4-star.png'),
  require('../assets/images/GradeStars/5-star.png')
]

const platform = Platform.OS

export default class ReviewView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      itemName: this.props.navigation.getParam('itemName', null),
      itemId: this.props.navigation.getParam('itemId', null),
      review: this.props.navigation.getParam('review'),
      isLiked: this.props.navigation.getParam('review').likedBy.length > 0,
      isDisliked: this.props.navigation.getParam('review').dislikedBy.length > 0,
      fromUserRecord: this.props.navigation.getParam('fromUserRecord', false),
      isImageView: false,
      images: []
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
    let images = []
    for (let i = 0; i < this.state.review.imgUrls.length; i++) {
      images.push({
        url: this.state.review.imgUrls[i]
      })
    }
    this.setState({
      images: images
    })
  }
  onClickLikeButton (likeReview) {
    this.setState({
      review: {
        ...this.state.review,
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
    if (this.state.isImageView && this.state.images.length > 0) {
      return (
        <Modal visible={this.state.isImageView}
          transparent>
          <ImageViewer
            enableSwipeDown
            onSwipeDown={() => this.setState({ isImageView: false })}
            imageUrls={this.state.images} />
        </Modal>
      )
    }
    return (
      <Container>
        <Header style={platform === 'android' ? androidStyle : {}} hasTabs={this.props.hasTabs}>
          <Left>
            <Button transparent
              onPress={
                (this.state.itemId)
                  ? (this.state.fromUserRecord)
                    ? () => this.props.navigation.navigate('UserRecords', { type: 'review' })
                    : () => this.props.navigation.navigate('Item', { itemName: this.state.itemName, itemId: this.state.itemId })
                  : () => this.props.navigation.navigate('Home')}>
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
          <Content style={{ width: 0.95 * width }}>
            <View style={{ flexDirection: 'row' }}>
              <Left style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Thumbnail square small
                  style={{ margin: 0.02 * width, marginLeft: 0.04 * width }}
                  source={{
                    uri: (this.state.review.author.profileImgUrl)
                      ? (this.state.review.author.profileImgUrl)
                      : 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} />
                <Text style={{ margin: 0.02 * width }}>{this.state.review.author.name}</Text>
              </Left>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{this.state.review.title}</Text>
            </View>
            <List horizontal dataArray={this.state.review.imgUrls}
              renderRow={(imgUrl) =>
                <Button transparent style={styles.itemImage}
                  onPress={() => { this.setState({ isImageView: true }) }}>
                  <Image
                    source={{ uri: imgUrl }} style={styles.itemImage} />
                </Button>} />
            <List>
              {
                this.state.review.grades.map((grade, index) =>
                  <ListItem style={{ flexDirection: 'row' }} key={index}>
                    <Left>
                      <Text style={{ marginLeft: 0.05 * width }}>{grade.name}</Text>
                    </Left>
                    <Body>
                      <Image source={starImages[grade.starNum - 1]} style={styles.starImage} />
                    </Body>
                    <Right />
                  </ListItem>)
              }
            </List>
            <View style={styles.likeButtonContainer}>
              <Segment style={{ backgroundColor: 'white' }}>
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
            <Text style={styles.text}>{this.state.review.text}</Text>
          </Content>
        </Body>
      </Container>
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
  text: {
    marginLeft: 0.05 * width,
    marginRight: 0.05 * width
  },
  likeButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 3
  }
})

const androidStyle = {
  marginTop: StatusBar.currentHeight
}
