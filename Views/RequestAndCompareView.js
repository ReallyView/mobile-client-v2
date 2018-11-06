import React from 'react'
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon
} from 'native-base'
import Headers from '../components/Headers'

export default class RequestAndCompareView extends React.Component {
  render () {
    return (
      <Container>
        <Headers navigation={this.props.navigation} headerTitle={'비교하기'}/>
        <Content />
        <Footer>
          <FooterTab>
            <Button onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name='home' />
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Category')}>
              <Icon name='menu' />
            </Button>
            <Button active>
              <Icon active name='navigate' />
            </Button>
            <Button onPress={() => this.props.navigation.navigate('More')}>
              <Icon name='ios-more' />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}
