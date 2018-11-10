import React from 'react'
import { Button, Left, Right, CardItem, Text, Card } from 'native-base'

export default class AddReviewButtons extends React.Component {
  render () {
    return (
      <Card transparent>
        <CardItem>
          <Left>
            <Button onPress={this.props.onClickSubmitButton}>
              <Text>제출하기</Text>
            </Button>
          </Left>
          <Right>
            <Button>
              <Text>이미지 넣기</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    )
  }
}
