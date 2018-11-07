import React from 'react'
import {
  View,
  List,
  ListItem,
  Item,
  Text,
  Title
} from 'native-base'
import { AsyncStorage, Image, StyleSheet } from 'react-native'

import Layout from '../constants/Layout'

const width = Layout.window.width
const height = Layout.window.height

export default class SideBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      profileImgUrl: ''
    }
  }
  componentWillMount () {
    const getData = async () => {
      const getProfileImgUrl = await AsyncStorage.getItem('profileImgUrl')
      const getName = await AsyncStorage.getItem('name')
      this.setState({
        profileImgUrl: getProfileImgUrl,
        name: getName
      })
    }
    getData()
  }
  render () {
    return (
      <View style={{ backgroundColor: 'white', height: height }}>
        {
          this.state.profileImgUrl
            ? <Image source={{ uri: this.state.profileImgUrl }} style={styles.profileImage} />
            : <Image source={require('../assets/images/profileIcon.png')} style={styles.profileImage} />
        }
        <Title style={{ marginTop: 0.05 * height }}>{this.state.name} 님 환영합니다</Title>
        <List style={styles.list}>
          <Item style={styles.item}>
            <ListItem style={styles.listItem}><Text style={styles.text}>내가 구독한 제품</Text></ListItem>
          </Item>
          <Item style={styles.item}>
            <ListItem style={styles.listItem}><Text style={styles.text}>투표 요청 현황</Text></ListItem>
          </Item>
          <Item style={styles.item}>
            <ListItem style={styles.listItem}><Text style={styles.text}>내가 작성한 글</Text></ListItem>
          </Item>
          <Item style={styles.item}>
            <ListItem style={styles.listItem}><Text style={styles.text}>내가 좋아요한 글</Text></ListItem>
          </Item>
          <Item style={styles.item}>
            <ListItem style={styles.listItem}><Text style={styles.text}>내가 작성한 투표</Text></ListItem>
          </Item>
        </List>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  profileImage: {
    marginTop: 0.1 * height,
    width: 0.15 * height,
    height: 0.15 * height,
    alignSelf: 'center'
  },
  name: {
    marginTop: 0.05 * height,
    height: 0.05 * height
  },
  list: {
    marginTop: 0.05 * height,
    width: 0.8 * width
  },
  item: {
    borderBottomWidth: 0
  },
  listItem: {
    marginLeft: 0,
    height: 0.1 * height,
    width: 0.8 * width,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    alignSelf: 'center'
  }
})
