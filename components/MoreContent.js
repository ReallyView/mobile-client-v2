import React from 'react'
import { Content, Card, CardItem, Left, Body, Text, List, ListItem, Right, Icon } from 'native-base'
import { AsyncStorage, Image } from 'react-native'
import Layout from '../constants/Layout'

export default class MoreContent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      profileImgUrl: '', // 없으면 null
      email: '', // 없으면 null
      name: '' // 없으면 null
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
              {
                (this.state.profileImgUrl)
                  ? <Image
                    source={{ uri: this.state.profileImgUrl }}
                    style={{ width: 0.2 * Layout.window.width, height: 0.2 * Layout.window.width, borderRadius: 0.02 * Layout.window.width }}
                  />
                  : <Image
                    source={require('../assets/images/profileIcon.png')}
                    style={{ width: 0.2 * Layout.window.width, height: 0.2 * Layout.window.width, borderRadius: 0.02 * Layout.window.width }}
                  />
              }
              <Body>
                {
                  (this.state.name)
                    ? <Text style={{ fontSize: 0.045 * Layout.window.width, fontWeight: 'bold' }}>{this.state.name}</Text>
                    : <Text style={{ fontSize: 0.045 * Layout.window.width, fontWeight: 'bold' }}>입력된 이름이 없습니다.</Text>
                }
                {
                  (this.state.email)
                    ? <Text style={{ fontSize: 0.03 * Layout.window.width, marginTop: 0.02 * Layout.window.width, color: 'gray' }}>{this.state.email}</Text>
                    : <Text style={{ fontSize: 0.03 * Layout.window.width, marginTop: 0.02 * Layout.window.width, color: 'gray' }}>입력된 이메일이 없습니다.</Text>
                }
              </Body>
            </Left>
          </CardItem>
        </Card>
        <List>
          <ListItem itemDivider>
            <Text>계정</Text>
          </ListItem>
          <ListItem
            icon
            onPress={() => this.props.navigation.navigate('ChangeProfile', { name: this.state.name })}
          >
            <Left>
              <Icon name={'md-settings'} />
            </Left>
            <Body>
              <Text>프로필 수정</Text>
            </Body>
          </ListItem>
          <ListItem
            icon
          >
            <Left>
              <Icon name={'ios-lock'} />
            </Left>
            <Body>
              <Text>비밀번호 변경</Text>
            </Body>
          </ListItem>
          <ListItem itemDivider>
            <Text>앱 정보</Text>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon name={'md-megaphone'} />
            </Left>
            <Body>
              <Text>공지사항</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon name={'md-information-circle'} />
            </Left>
            <Body>
              <Text>버전</Text>
            </Body>
            <Right>
              <Text>2.0</Text>
            </Right>
          </ListItem>
          <ListItem icon onPress={() => this.props.navigation.navigate('OpensourceLicense')}>
            <Left>
              <Icon name={'md-bulb'} />
            </Left>
            <Body>
              <Text>라이센스</Text>
            </Body>
          </ListItem>
        </List>
      </Content>
    )
  }
}
