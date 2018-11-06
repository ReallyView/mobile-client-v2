import React from 'react'
import {
  View,
  Icon
} from 'native-base'
import { AsyncStorage, Image } from 'react-native'

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
      const data = await AsyncStorage.getItem('profileImgUrl')
      this.setState({
        profileImgUrl: data
      })
    }
    getData()
  }
  render () {
    return (
      <View style={{ backgroundColor: 'white', height: height }}>
        {
          this.state.profileImgUrl
            ? <Image source={{ uri: this.state.profileImgUrl }} style={profileImageStyle} />
            : <Icon name={'ios-contact'} style={profileImageStyle} />
        }
      </View>
    )
  }
}

const profileImageStyle = {
  marginTop: 0.1 * height,
  width: 0.3 * width,
  height: 0.3 * width,
  alignSelf: 'center'
}
