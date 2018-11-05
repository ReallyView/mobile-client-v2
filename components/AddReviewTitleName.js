import React from 'react'
import { Input, Item } from 'native-base'

export default class AddReviewTitleName extends React.Component {
  render () {
    return (
      <Item>
        <Input
          placeholder='제목'
          onChangeText={(title) => this.props.onChangeTitle(title)}
        />
      </Item>
    )
  }
}
