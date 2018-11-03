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

import Layout from '../constants/Layout'

const width = Layout.window.width
const height = Layout.window.height

export default class ItemCard extends React.Component {
  render () {
    if (!this.props.item) {
      return <View />
    }
    return (
      <Item onPress={() => this.props.onClickItemCard(this.props.item.name, this.props.item.id)}>
        <Card style={styles.cardStyle}>
          <Label style={styles.titleStyle}>{this.props.item.name}</Label>
          <List horizontal dataArray={this.props.item.reviews}
            renderRow={(review) =>
              <Button transparent
                style={styles.imageStyle}
                onPress={() => this.props.navigation.navigate('Review', { review: review })}>
                <Image style={styles.imageStyle}
                  source={{ uri: review.imgUrls[0] }} />
              </Button>} />
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
