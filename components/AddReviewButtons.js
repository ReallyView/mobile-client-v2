import React from 'react'
import { Button, Text, View } from 'native-base'

export default class AddReviewButtons extends React.Component {
  render () {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button onPress={this.props.onClickSubmitButton} bordered>
          <Text>제출하기</Text>
        </Button>
        <Button bordered>
          <Text>이미지 넣기</Text>
        </Button>
      </View>
    )
  }
}
