import React from 'react'
import { Body, Card, CardItem, Form, Icon, Left, Picker } from 'native-base'
import Layout from '../constants/Layout'

export default class AddReviewPicAndCategory extends React.Component {
  render () {
    return (
      <Card transparent>
        <CardItem>
          <Left>
            <Card>
              <CardItem />
            </Card>
            <Body>
              <Form>
                <Picker
                  mode='dropdown'
                  iosIcon={<Icon name='ios-arrow-down-outline' />}
                  style={{ width: 0.4 * Layout.window.width }}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}
                >
                  <Picker.Item label='Category' value='key0' />
                  <Picker.Item label='IT' value='key1' />
                  <Picker.Item label='기타' value='key2' />
                </Picker>
              </Form>
            </Body>
          </Left>
        </CardItem>
      </Card>
    )
  }
}
