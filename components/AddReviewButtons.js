import React from 'react'
import { Button, Text, View } from 'native-base'
import { ImagePicker, Permissions } from 'expo'

import Layout from '../constants/Layout'

const width = Layout.window.width

export default class AddReviewButtons extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      imgUrl: ''
    }
    this.pickImage = this.pickImage.bind(this)
  }
  async askPermissionsAsync () {
    await Permissions.askAsync(Permissions.CAMERA_ROLL)
  };
  async pickImage () {
    await this.askPermissionsAsync()
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    })
    if (!result.cancelled) {
      this.props.onClickImage(result.uri)
    }
  }
  render () {
    return (
      <View style={{ justifyContent: 'space-around', alignItems: 'center' }}>
        <Button bordered onPress={this.pickImage} block style={{ margin: 0.03 * width }}>
          <Text>이미지 넣기</Text>
        </Button>

        <Button onPress={this.props.onClickSubmitButton} bordered block style={{ margin: 0.03 * width }}>
          <Text>제출하기</Text>
        </Button>
      </View>
    )
  }
}
