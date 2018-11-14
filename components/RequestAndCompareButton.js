import React from 'react'
import { Button, Text, View } from 'native-base'

export default class RequestAndCompareButton extends React.Component {
  render () {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button onPress={this.props.onClickRequestButton} bordered>
          <Text>요청하기</Text>
        </Button>
        <Button onPress={this.props.onClickCompareButton} bordered>
          <Text>비교하기</Text>
        </Button>
      </View>
    )
  }
}
