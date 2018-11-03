import React from 'react'
import {
  Card,
  List,
  ListItem,
  Button,
  Text,
  Item,
  View,
  Thumbnail,
  Title,
  Left,
  Body,
  Right
} from 'native-base'
import { Image, StyleSheet } from 'react-native'

import Layout from '../constants/Layout'

const width = Layout.window.width
const height = Layout.window.height

const starImages = [
  require('../assets/images/GradeStars/1-star.png'),
  require('../assets/images/GradeStars/2-star.png'),
  require('../assets/images/GradeStars/3-star.png'),
  require('../assets/images/GradeStars/4-star.png'),
  require('../assets/images/GradeStars/5-star.png')
]

export default class ReviewCard extends React.Component {
  render () {
    if (!this.props.review) {
      return <View />
    }
    return (
      <Item>
        <Card>
          <View style={{ flexDirection: 'row' }}>
            <Left style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Thumbnail square small
                style={{ margin: 0.02 * width }}
                source={{
                  uri: (this.props.review.author.profileImgUrl)
                    ? (this.props.review.author.profileImgUrl)
                    : 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} />
              <Text style={{ margin: 0.02 * width }}>{this.props.review.author.name}</Text>
            </Left>
            <Body />
            <Right />
          </View>
          <Text style={styles.title}>{this.props.review.title}</Text>
          <List horizontal dataArray={this.props.review.imgUrls}
            renderRow={(imgUrl) =>
              <Button transparent style={styles.itemImage}>
                <Image
                  source={{ uri: imgUrl }} style={styles.itemImage} />
              </Button>} />
          <List>
            {
              this.props.review.grades.map((grade, index) =>
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
          <Text numberOfLines={5} style={styles.text}>{this.props.review.text}</Text>
        </Card>
      </Item>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 0.03 * width,
    marginBottom: 0.05 * width,
    marginLeft: 0.07 * width
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