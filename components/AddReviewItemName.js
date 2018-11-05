import React from 'react'
import { Input, Item, Left } from 'native-base'

export default class AddReviewItemName extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      addItemName: ''
    }
  }
  render () {
    return (
      <Left>
        <Item>
          <Input
            placeholder='제품명'
            onChangeText={(addItemName) => this.setState({
              addItemName: addItemName
            })}
          />
        </Item>
      </Left>
    )
  }
}
