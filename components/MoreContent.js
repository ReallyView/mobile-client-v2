import React from 'react'
import { Content, Card, CardItem, Left, Thumbnail, Body, Text, List, ListItem } from 'native-base'
import Layout from '../constants/Layout'

export default class MoreContent extends React.Component {
  render () {
    return (
      <Content>
        <Card transparent>
          <CardItem>
            <Left>
              <Thumbnail square source={{ uri: this.props.profileImgUrl }} style={{ width: 90, height: 90 }} />
              <Body>
                <Text style={{ fontSize: 0.045 * Layout.window.width }}>email: {this.props.email}</Text>
                <Text />
                <Text />
                <Text />
                <Text />
                <Text />
                <Text style={{ fontSize: 0.045 * Layout.window.width }}>name: {this.props.name}</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
        <List>
          <ListItem>
            <Text>프로필 수정</Text>
          </ListItem>
          <ListItem>
            <Text>공지사항</Text>
          </ListItem>
          <ListItem>
            <Text>버전</Text>
          </ListItem>
          <ListItem>
            <Text>라이센스</Text>
          </ListItem>
        </List>
      </Content>
    )
  }
}
