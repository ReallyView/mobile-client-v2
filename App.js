import React from 'react'
import AppNavigator from './navigation/AppNavigator'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-client'
import Expo from 'expo'
import { Root, StyleProvider } from 'native-base'
import getTheme from './native-base-theme/components'
import platform from './native-base-theme/variables/platform'
import { AsyncStorage } from 'react-native'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import LoginView from './Views/LoginView'
import SERVER_URI from './constants/SERVER_URI'

const httpLink = createHttpLink({
  uri: SERVER_URI
})

const authLink = setContext((_, { headers }) => {
  const token = AsyncStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      isReady: false,
      token: '',
      client: new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
      })
    }
    this.onLogin = this.onLogin.bind(this)
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
  onLogin (token) {
    const httpLink = createHttpLink({
      uri: SERVER_URI
    })
    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : ''
        }
      }
    })
    this.setState({
      token: token,
      client: new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
      })
    })
  }
  componentDidUpdate () {

  }
  render () {
    if (!this.state.isReady) {
      return <Expo.AppLoading />
    }
    return (
      <ApolloProvider client={this.state.client}>
        <StyleProvider style={getTheme(platform)}>
          <Root>
            {
              (this.state.token)
                ? <AppNavigator />
                : <LoginView onLogin={this.onLogin} />
            }
          </Root>
        </StyleProvider>
      </ApolloProvider>
    )
  }
}
