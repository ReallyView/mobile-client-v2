import React, { Component } from 'react'
import { Container, Form, Item, Input, View, Button, Text } from 'native-base'
import { AsyncStorage } from 'react-native'

import LoginButton from '../components/LoginButton'
import SignUpView from './SignUpView'
import Layout from '../constants/Layout'

const height = Layout.window.height

export default class LoginView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: 'sskim0126@gmail.com',
      password: '1234',
      isSignUpView: false
    }
    this.finishLogin = this.finishLogin.bind(this)
    this.finishSignUp = this.finishSignUp.bind(this)
  }
  finishLogin (token, email, name, profileImgUrl, userId) {
    if (token) {
      const setData = async () => {
        await AsyncStorage.multiSet([
          ['token', token],
          ['email', email || ''],
          ['name', name || ''],
          ['profileImgUrl', profileImgUrl || ''],
          ['userId', userId || '']
        ])
      }
      setData()
      this.props.onLogin(token)
    }
  }
  finishSignUp () {
    this.setState({
      isSignUpView: false
    })
  }
  render () {
    if (this.state.isSignUpView) {
      return <SignUpView finishSignUp={this.finishSignUp} />
    }
    return (
      <Container>
        <View>
          <Text style={titleStyle}>ReallyView</Text>
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
          <Button block bordered
            style={{ margin: 15, marginTop: 0.02 * height }}
            onPress={() => this.setState({ isSignUpView: true })}>
            <Text>Sign Up</Text>
          </Button>
        </View>
      </Container>
    )
  }
}

const titleStyle = {
  fontSize: 50,
  marginTop: 0.2 * height,
  marginBottom: 0.1 * height,
  marginLeft: 0.1 * height
}
