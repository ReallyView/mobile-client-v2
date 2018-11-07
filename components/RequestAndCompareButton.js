import React from 'react'
import { Button, Left, Right, Text, Body, CardItem } from 'native-base'

export default class RequestAndCompareButton extends React.Component {
  render () {
    return (
      <CardItem>
        <Left>
          <Body>
            <CardItem>
              <Button onPress={this.props.onClickRequestButton}>
                <Text>요청하기</Text>
              </Button>
            </CardItem>
          </Body>
        </Left>
        <Right>
          <CardItem>
            <Left>
              <Button onPress={this.props.onClickCompareButton}>
                <Text>비교하기</Text>
              </Button>
            </Left>
          </CardItem>
        </Right>
      </CardItem>
    )
  }
}
