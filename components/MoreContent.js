import React from 'react'
import { Content, Card, CardItem, Left, Thumbnail, Body, Text } from 'native-base'

export default class MoreContent extends React.Component {
  render () {
    return (
      <Content>
        <Card transparent>
          <CardItem>
            <Left>
              <Thumbnail square source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} />
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
