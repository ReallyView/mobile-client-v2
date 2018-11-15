import React from 'react'
import { Content, Card, CardItem, Left, Body, Right, Text, Form, Icon, Item } from 'native-base'
import Layout from '../constants/Layout'
import { AsyncStorage, Image } from 'react-native'

export default class ChangeProfileContent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      profileImgUrl: '',
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
              {
                (this.state.profileImgUrl)
                  ? <Image
                    source={{ uri: this.state.profileImgUrl }}
                    style={{ width: 0.3 * Layout.window.width, height: 0.3 * Layout.window.width, borderRadius: 0.02 * Layout.window.width }}
                  />
                  : <Image
                    source={require('../assets/images/profileIcon.png')}
                    style={{ width: 0.3 * Layout.window.width, height: 0.3 * Layout.window.width, borderRadius: 0.02 * Layout.window.width }}
                  />
              }
              <CardItem>
                {
                  (this.state.name)
                    ? <Text style={{ fontSize: 0.07 * Layout.window.width, marginTop: 0.02 * Layout.window.width, fontWeight: 'bold' }}>{this.state.name}</Text>
                    : <Text style={{ fontSize: 0.03 * Layout.window.width, marginTop: 0.02 * Layout.window.width, fontWeight: 'bold' }}>입력된 이름이 없습니다.</Text>
                }
                <Item style={{ borderBottomWidth: 0 }} onPress={() => this.props.navigation.navigate('ChangeProfileName', { email: this.state.email, name: this.state.name })}>
                  <Icon name={'md-brush'} size={0.01 * Layout.window.width} style={{ marginLeft: 0.02 * Layout.window.width, color: 'gray' }} />
                </Item>
              </CardItem>
              {
                (this.state.email)
                  ? <Text style={{ fontSize: 0.03 * Layout.window.width, color: 'gray' }}>{this.state.email}</Text>
                  : <Text style={{ fontSize: 0.03 * Layout.window.width, color: 'gray' }}>입력된 이메일이 없습니다.</Text>
              }
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
