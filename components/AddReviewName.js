import React from 'react'
import { Body, Card, CardItem, Input, Item, Left, Text } from 'native-base'

export default class AddReviewName extends React.Component {
  render () {
    return (
      <Card transparent>
        <CardItem>
          <Left>
            <Text>제품명: </Text>
            <Body>
              <Item>
                <Input
                  placeholder='Input Product Name'
                />
              </Item>
            </Body>
          </Left>
        </CardItem>
      </Card>
    )
  }
}
