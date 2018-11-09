import React from 'react'
import { Input, Item, Left } from 'native-base'

export default class AddReviewItemName extends React.Component {
  render () {
    return (
      <Left>
        <Item>
          <Input
            placeholder='제품명'
            onChangeText={(addItemName) => this.props.onChangeItemName(addItemName)}me
            value={this.props.addItemName}
          />
        </Item>
      </Left>
    )
  }
}
