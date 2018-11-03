import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input } from 'native-base'
import LoginButton from '../components/LoginButton'

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
      this.props.navigation.navigate('Home', {
        token: token,
        email: email,
        name: name,
        profileImgUrl: profileImgUrl
      })
    }
  }

  render () {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input placeholder='Email'
                onChangeText={(text) => this.setState({ email: text.toLowerCase() })}
                autoCapitalize={'none'}
                value={this.state.email} />
            </Item>
            <Item last>
              <Input placeholder='Password'
                onChangeText={(text) => this.setState({ password: text.toLowerCase() })}
                autoCapitalize={'none'}
                value={this.state.password}
                secureTextEntry />
            </Item>
          </Form>
          <LoginButton
            email={this.state.email}
            password={this.state.password}
            finishLogin={this.finishLogin} />
        </Content>
      </Container>
    )
  }
}
