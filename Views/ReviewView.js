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
  Content
} from 'native-base'

import Layout from '../constants/Layout'
import { Image, StyleSheet } from 'react-native'

const width = Layout.window.width
const height = Layout.window.height

const starImages = [
  require('../assets/images/GradeStars/1-star.png'),
  require('../assets/images/GradeStars/2-star.png'),
  require('../assets/images/GradeStars/3-star.png'),
  require('../assets/images/GradeStars/4-star.png'),
  require('../assets/images/GradeStars/5-star.png')
]

export default class ReviewView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      itemName: this.props.navigation.getParam('itemName'),
      itemId: this.props.navigation.getParam('itemId'),
      review: this.props.navigation.getParam('review')
    }
  }
  render () {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent
              onPress={() => this.props.navigation.navigate('Item', { itemName: this.state.itemName, itemId: this.state.itemId })}>
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
          <Content>
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
                <Button transparent style={styles.itemImage}>
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
    margin: 0.03 * width
  }
})
