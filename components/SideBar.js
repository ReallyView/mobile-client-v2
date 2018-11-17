import React from 'react'
import {
  View,
  List,
  ListItem,
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
    this.onClickUserRecords = this.onClickUserRecords.bind(this)
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
  onClickUserRecords (type) {
    this.props.navigation.navigate('UserRecords', { type: type })
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
          <Text style={{ marginLeft: 0.05 * width, fontSize: 0.05 * width, color: '#62B1F6' }}>내 기록</Text>
          <ListItem style={styles.listItem} onPress={() => this.onClickUserRecords('subscribe')}>
            <Text style={styles.text}>구독</Text>
          </ListItem>
          <ListItem style={styles.listItem} onPress={() => this.onClickUserRecords('voteRequest')}>
            <Text style={styles.text}>투표 요청</Text>
          </ListItem>
          <ListItem style={styles.listItem} onPress={() => this.onClickUserRecords('review')}>
            <Text style={styles.text}>리뷰</Text>
          </ListItem>
          <ListItem style={styles.listItem} onPress={() => this.onClickUserRecords('likeAndDislike')}>
            <Text style={styles.text}>좋아요 / 싫어요</Text>
          </ListItem>
          <ListItem style={styles.listItem} onPress={() => this.onClickUserRecords('vote')}>
            <Text style={styles.text}>투표한</Text>
          </ListItem>
        </List>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  profileImage: {
    marginTop: 0.1 * height,
    width: 0.16 * height,
    height: 0.16 * height,
    alignSelf: 'center',
    borderRadius: 0.08 * height,
    borderWidth: 2,
    borderColor: '#dfe4ea'
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
    height: 0.07 * height,
    width: 0.8 * width - 5
  },
  text: {
    marginLeft: 0.1 * width
  }
})
