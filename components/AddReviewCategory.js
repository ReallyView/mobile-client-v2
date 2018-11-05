import React from 'react'
import { Form, Icon, Picker } from 'native-base'
import Layout from '../constants/Layout'

export default class AddReviewPicAndCategory extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: undefined
    }
  }
  onValueChange (value) {
    this.setState({
      selected: value
    })
  }
  render () {
    return (
      <Form>
        <Picker
          mode='dropdown'
          iosIcon={<Icon name='ios-arrow-down-outline' />}
          style={{ width: 0.4 * Layout.window.width }}
          selectedValue={this.state.selected}
          onValueChange={this.onValueChange.bind(this)}
        >
          <Picker.Item label='Category' value='key0' />
          <Picker.Item label='전자제품' value='key1' />
          <Picker.Item label='화장품' value='key2' />
          <Picker.Item label='악기' value='key3' />
          <Picker.Item label='의류' value='key4' />
          <Picker.Item label='음식점' value='key5' />
          <Picker.Item label='도서' value='key6' />
        </Picker>
      </Form>
    )
  }
}
