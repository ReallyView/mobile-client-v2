import React, { Component } from 'react'
import { Container, Content, Form, Item, Input, View, Title } from 'native-base'
import { AsyncStorage } from 'react-native'

import LoginButton from '../components/LoginButton'
import Layout from '../constants/Layout'

const height = Layout.window.height

export default class LoginView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: 'sskim0126@gmail.com',
      password: '1234'
    }
    this.finishLogin = this.finishLogin.bind(this)
  }
  finishLogin (token, email, name, profileImgUrl) {
    if (token) {
      const setData = async () => {
        await AsyncStorage.multiSet([
          ['token', token],
          ['email', email || ''],
          ['name', name || ''],
          ['profileImgUrl', profileImgUrl || '']
        ])
      }
      setData()
      this.props.onLogin(token)
    }
  }

  render () {
    return (
      <Container>
        <View>
          <Title style={titleStyle}>ReallyView</Title>
          <Form>
            <Item>
              <Input placeholder='Email'
                onChangeText={(text) => this.setState({ email: text })}
                autoCapitalize={'none'}
                value={this.state.email} />
            </Item>
            <Item>
              <Input placeholder='Password'
                onChangeText={(text) => this.setState({ password: text })}
                autoCapitalize={'none'}
                value={this.state.password}
                secureTextEntry />
            </Item>
          </Form>
          <LoginButton
            email={this.state.email}
            password={this.state.password}
            finishLogin={this.finishLogin} />
        </View>
      </Container>
    )
  }
}

const titleStyle = {
  fontSize: 50,
  marginTop: 0.2 * height,
  marginBottom: 0.1 * height
}
