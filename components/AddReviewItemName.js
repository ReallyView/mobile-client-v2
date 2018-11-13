import React from 'react'
import { Input, Item, Left } from 'native-base'

export default class AddReviewItemName extends React.Component {
  render () {
    return (
      <Left>
        <Item>
          <Input
            placeholder='제품명'
            onChangeText={(itemName) => this.props.onChangeItemName(itemName)}
            value={this.props.itemName}
          />
        </Item>
      </Left>
    )
  }
}
