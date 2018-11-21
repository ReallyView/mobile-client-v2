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
          enabled={this.props.enabled}
        >
          <Picker.Item label='Category' value='null' />
          <Picker.Item label='전자제품' value='cjny2hwqyep0s0995wn65axi7' />
          <Picker.Item label='화장품' value='cjny2i74cep2y0995ym6md0j5' />
          <Picker.Item label='악기' value='cjny2jqhcepff0995ri13a125' />
          <Picker.Item label='의류' value='cjny2k01xeph40995sx53g76l' />
          <Picker.Item label='음식점' value='cjny2kb6vepiq0995qpshmjaa' />
          <Picker.Item label='도서' value='cjny2ko8vepkj0995plfk6u27' />
        </Picker>
      </Form>
    )
  }
}
