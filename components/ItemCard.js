import React from 'react'
import {
  Card,
  List,
  Button,
  Text
} from 'native-base'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'

import Layout from '../constants/Layout'
import Colors from '../constants/Colors'

const width = Layout.window.width
const height = Layout.window.height

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

export default class ItemCard extends React.Component {
  render () {
    return (
      <TouchableOpacity>
        <Card style={styles.cardStyle}>
          <Text style={styles.titleStyle}>{this.props.item.name}</Text>
          <List horizontal dataArray={this.props.item.reviews} style={styles.imageListStyle}
            renderRow={(review) =>
              <Button transparent style={styles.imageStyle}>
                <Image style={styles.imageStyle}
                  source={{ uri: review.imgUrls[0] }} />
              </Button>} />
        </Card>
      </TouchableOpacity>
    )
  }
}
