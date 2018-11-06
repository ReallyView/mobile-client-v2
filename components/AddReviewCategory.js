import React from 'react'
import { Form, Icon, Picker } from 'native-base'
import Layout from '../constants/Layout'

export default class AddReviewCategory extends React.Component {
  render () {
    return (
      <Form>
        <Picker
          mode='dropdown'
          iosIcon={<Icon name='ios-arrow-down-outline' />}
          style={{ width: 0.4 * Layout.window.width }}
          selectedValue={this.props.categoryId}
          onValueChange={this.props.onChangeCategoryId}
        >
          <Picker.Item label='Category' value='Category' />
          <Picker.Item label='전자제품' value='전자제품' />
          <Picker.Item label='화장품' value='화장품' />
          <Picker.Item label='악기' value='악기' />
          <Picker.Item label='의류' value='의류' />
          <Picker.Item label='음식점' value='음식점' />
          <Picker.Item label='도서' value='도서' />
        </Picker>
      </Form>
    )
  }
}
