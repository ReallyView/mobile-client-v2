import React from 'react'
import { Content, Card, CardItem, Left, Thumbnail, Body, Text, List, ListItem } from 'native-base'
import { AsyncStorage } from 'react-native'
import Layout from '../constants/Layout'

export default class MoreContent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      profileImgUrl: undefined,
      email: '',
      name: ''
    }
  }
  componentWillMount () {
    const getData = async () => {
      const profile = await AsyncStorage.getItem('profileImgUrl')
      const email = await AsyncStorage.getItem('email')
      const name = await AsyncStorage.getItem('name')
      this.setState({
        profileImgUrl: profile,
        email: email,
        name: name
      })
    }
    getData()
  }
  render () {
    return (
      <Content>
        <Card transparent>
          <CardItem>
            <Left>
              <Thumbnail square source={{ uri: this.state.profileImgUrl }} style={{ width: 90, height: 90 }} />
              <Body>
                <Text style={{ fontSize: 0.045 * Layout.window.width }}>email: {this.state.email}</Text>
                <Text style={{ fontSize: 0.045 * Layout.window.width, marginTop: 20 }}>name: {this.state.name}</Text>
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
