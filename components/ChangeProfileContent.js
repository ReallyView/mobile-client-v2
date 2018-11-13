import React from 'react'
import { Content, Card, CardItem, Left, Body, Right, Thumbnail, Text, Form, Icon, Item } from 'native-base'
import Layout from '../constants/Layout'
import { AsyncStorage } from 'react-native'

export default class ChangeProfileContent extends React.Component {
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
              <Form />
            </Left>
            <Body>
              <Thumbnail
                square
                source={{ uri: this.state.profileImgUrl }}
                style={{ width: 0.3 * Layout.window.width, height: 0.3 * Layout.window.width }}
              />
              <CardItem>
                <Text
                  style={{ fontSize: 0.07 * Layout.window.width, marginTop: 0.02 * Layout.window.width, fontWeight: 'bold' }}>
                  {this.state.name}
                </Text>
                <Item style={{ borderBottomWidth: 0 }} onPress={() => this.props.navigation.navigate('ChangeProfileName', { email: this.state.email, name: this.state.name })}>
                  <Icon name={'md-brush'} size={0.01 * Layout.window.width} style={{ marginLeft: 0.02 * Layout.window.width, color: 'gray' }} />
                </Item>
              </CardItem>
              <Text style={{ fontSize: 0.03 * Layout.window.width, color: 'gray' }}>{this.state.email}</Text>
            </Body>
            <Right>
              <Form />
            </Right>
          </CardItem>
        </Card>
      </Content>
    )
  }
}
