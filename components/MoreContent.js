import React from 'react'
import { Content, Card, CardItem, Left, Thumbnail, Body, Text } from 'native-base'

export default class MoreContent extends React.Component {
  render () {
    return (
      <Content>
        <Card transparent>
          <CardItem>
            <Left>
              <Thumbnail square large source={{ uri: this.props.profileImgUrl }} />
              <Body>
                <Text>email: {this.props.email}</Text>
                <Text>name: {this.props.name}</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </Content>
    )
  }
}
