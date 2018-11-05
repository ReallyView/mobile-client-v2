import React from 'react'
import { Input, Item } from 'native-base'

export default class AddReviewTitleName extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Title: ''
    }
  }
  render () {
    return (
      <Item>
        <Input
          placeholder='제목'
          onChangeText={(title) => this.setState({
            Title: title
          })}
        />
      </Item>
    )
  }
}
