import React from 'react'
import { Body, Card, CardItem, Input, Item, Left, Text, Right } from 'native-base'
import AddReviewCategory from '../components/AddReviewCategory'

export default class AddReviewName extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      addItemName: ''
    }
  }
  render () {
    return (
      <Card transparent>
        <CardItem>
          <Left>
            <Text>제품명: </Text>
            <Body>
              <Item>
                <Input
                  placeholder='Input Name'
                  onChangeText={(addItemName) => this.setState({
                    addItemName: addItemName
                  })
                  }
                />
              </Item>
            </Body>
            <Right>
              <AddReviewCategory />
            </Right>
          </Left>
        </CardItem>
      </Card>
    )
  }
}
