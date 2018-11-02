import React from 'react'
import AppNavigator from './navigation/AppNavigator'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import Expo from 'expo'
import { Root, StyleProvider } from 'native-base'
import getTheme from './native-base-theme/components'
import platform from './native-base-theme/variables/platform'

const client = new ApolloClient({
  uri: 'http://ec2-13-125-69-81.ap-northeast-2.compute.amazonaws.com:4000'
})

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      isReady: false
    }
  }

  async componentWillMount () {
    await Expo.Font.loadAsync({
      NanumGothic: require('./assets/fonts/NanumGothic.ttf'),
      Entypo: require('native-base/Fonts/Entypo.ttf'),
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf')
    })
    this.setState({ isReady: true })
  }
  render () {
    if (!this.state.isReady) {
      return <Expo.AppLoading />
    }
    return (
      <ApolloProvider client={client}>
        <StyleProvider style={getTheme(platform)}>
          <Root>
            <AppNavigator />
          </Root>
        </StyleProvider>
      </ApolloProvider>
    )
  }
}
