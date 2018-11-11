import React from 'react'
import {
  Item,
  View,
  Text,
  Card,
  Icon
} from 'native-base'
import { StyleSheet } from 'react-native'

import Layout from '../constants/Layout'

const width = Layout.window.width
const height = Layout.window.height

export default class Category extends React.Component {
  render () {
    if (!this.props.name) {
      return <View />
    }
    return (
      <Item onPress={() => this.props.onClickCategory(this.props.id, this.props.name)} style={{ borderBottomWidth: 0 }}>
        <Card style={styles.layout}>
          <Icon name={this.props.icon} style={{ color: 'gray' }} />
          <Text style={{ alignSelf: 'center' }}>{this.props.name}</Text>
        </Card>
      </Item>
    )
  }
}

const styles = StyleSheet.create({
  layout: {
    width: 0.48 * width,
    height: 0.2 * height,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 0,
    marginBottom: 0
  }
})
