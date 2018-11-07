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
              onChangeText={(itemName) => this.props.onChangeItemName1(itemName)}
            />
          </Item>
          <Text> VS </Text>
          <CardItem>
            <Item style={{ width: 0.4 * Layout.window.width }}>
              <Input
                placeholder='제품명'
                onChangeText={(itemName) => this.props.onChangeItemName2(itemName)}
              />
            </Item>
          </CardItem>
        </Left>
      </View>
    )
  }
}
