import React from 'react'
import { Input, Item, Left, Text, CardItem } from 'native-base'
import { View } from 'react-native'
import Layout from '../constants/Layout'

export default class RequestAndCompareInput extends React.Component {
  render () {
    return (
      <View>
        <Left>
          <Item style={{ width: 0.35 * Layout.window.width }}>
            <Input
              placeholder='제품명'
              onChangeText={(itemName) => this.props.onChangeProduct1(itemName)}
              value={this.props.product1}
            />
          </Item>
          <Text> VS </Text>
          <CardItem>
            <Item style={{ width: 0.4 * Layout.window.width }}>
              <Input
                placeholder='제품명'
                onChangeText={(itemName) => this.props.onChangeProduct2(itemName)}
                value={this.props.product2}
              />
            </Item>
          </CardItem>
        </Left>
      </View>
    )
  }
}
