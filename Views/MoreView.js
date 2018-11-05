import React from 'react'
import {
  Container,
  Footer,
  FooterTab,
  Button,
  Icon
} from 'native-base'
import MoreHeader from '../components/MoreHeader'
import MoreContent from '../components/MoreContent'

export default class MoreView extends React.Component {
  render () {
    return (
      <Container>
        <MoreHeader
          navigation={this.props.navigation}
        />
        <MoreContent
          email={this.props.navigation.getParam('email')}
          name={this.props.navigation.getParam('name')}
          profileImgUrl={this.props.navigation.getParam('profileImgUrl')}
        />
        <Footer>
          <FooterTab>
            <Button onPress={() => this.props.navigation.navigate('Home',
              { email: this.props.navigation.getParam('email'),
                name: this.props.navigation.getParam('name'),
                profileImgUrl: this.props.navigation.getParam('profileImgUrl') })}
            >
              <Icon name='home' />
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Category')}>
              <Icon name='menu' />
            </Button>
            <Button onPress={() => this.props.navigation.navigate('RequestAndCompare')}>
              <Icon name='navigate' />
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
