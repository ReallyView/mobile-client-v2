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
          <CardItem>
            <Text>프로필 수정</Text>
          </CardItem>
          <CardItem>
            <Text>공지사항</Text>
          </CardItem>
          <CardItem>
            <Text>버전</Text>
          </CardItem>
          <CardItem>
            <Text>라이센스</Text>
          </CardItem>
        </Card>
      </Content>
    )
  }
}
