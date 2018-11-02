import React from 'react'
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon
} from 'native-base'
import MainHeader from '../components/MainHeader'

export default class MoreView extends React.Component {
  render () {
    return (
      <Container>
        <MainHeader />
        <Content />
        <Footer>
          <FooterTab>
            <Button onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name='home' />
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Category')}>
              <Icon name='menu' />
            </Button>
            <Button onPress={() => this.props.navigation.navigate('RequestAndCompare')}>
              <Icon active name='navigate' />
            </Button>
            <Button active>
              <Icon active name='ios-more' />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}
