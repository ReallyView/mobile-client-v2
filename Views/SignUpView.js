import React, { Component } from 'react'
import { Container, Form, Item, Input, View } from 'native-base'

import SignUpButton from '../components/SignUpButton'
import Layout from '../constants/Layout'
import SignUpHeader from '../components/SignUpHeader'

const height = Layout.window.height

export default class SignUpView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      isSignUpView: false
    }
  }
  render () {
    return (
      <Container>
        <SignUpHeader headerTitle='Sign Up' finishSignUp={this.props.finishSignUp} />
        <View style={{ marginTop: 0.05 * height }}>
          <Form>
            <Item>
              <Input placeholder='Name'
                onChangeText={(text) => this.setState({ name: text })}
                autoCapitalize={'none'}
                value={this.state.name} />
            </Item>
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
          <SignUpButton
            name={this.state.name}
            email={this.state.email}
            password={this.state.password}
            finishSignUp={this.props.finishSignUp} />
        </View>
      </Container>
    )
  }
}
