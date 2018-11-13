import React from 'react'
import { Body, Button, Container, Header, Icon, Left, Right, Title, Text, Content, ListItem, List, Input, Form } from 'native-base'
import Layout from '../constants/Layout'
import { StatusBar, Platform } from 'react-native'
import ChangeProfileName from '../components/ChangeProfileName'

const platform = Platform.OS

export default class ChangeProfileNameView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: this.props.navigation.getParam('email'),
      name: this.props.navigation.getParam('name'),
      isSubmit: false
    }
    this.onChangeName = this.onChangeName.bind(this)
    this.onClickOk = this.onClickOk.bind(this)
  }
  onChangeName (name) {
    this.setState({
      name: name
    })
  }
  onClickOk () {
    this.setState({
      isSubmit: true
    })
  }
  render () {
    return (
      <Container>
        <Header style={platform === 'android' ? androidStyle : {}} hasTabs={this.props.hasTabs}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('ChangeProfile')}>
              <Icon name={'arrow-back'} style={{ marginLeft: 0.02 * Layout.window.width }} />
            </Button>
          </Left>
          <Body>
            <Title>이름 바꾸기</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.onClickOk}>
              <Text>확인</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <List>
            <Text style={{ color: 'gray', marginLeft: 0.05 * Layout.window.width, marginTop: 0.03 * Layout.window.width }}>이름</Text>
            <ListItem style={{ borderBottomWidth: 0 }}>
              <Input
                style={{ borderBottomWidth: 1 }}
                onChangeText={(name) => this.onChangeName(name)}
                value={this.state.name}
              />
            </ListItem>
          </List>
          {
            (this.state.isSubmit)
              ? <ChangeProfileName navigation={this.props.navigation} email={this.state.email} name={this.state.name} password={'1234'} /> : <Form />
          }
        </Content>
      </Container>
    )
  }
}

const androidStyle = {
  marginTop: StatusBar.currentHeight
}
