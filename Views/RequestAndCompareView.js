import React from 'react'
import {
  Container,
  Footer,
  FooterTab,
  Button,
  Icon
} from 'native-base'
import Headers from '../components/Headers'
import RequestAndCompareContent from '../components/RequestAndCompareContent'

export default class RequestAndCompareView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      product1: '',
      product2: ''
    }
    this.onChangeProduct1 = this.onChangeProduct1.bind(this)
    this.onChangeProduct2 = this.onChangeProduct2.bind(this)
  }
  onChangeProduct1 (itemName) {
    this.setState({
      product1: itemName
    })
  }
  onChangeProduct2 (itemName) {
    this.setState({
      product2: itemName
    })
  }
  render () {
    return (
      <Container>
        <Headers navigation={this.props.navigation} headerTitle={'비교하기/요청하기'} navigate={'Home'} hasTabs />
        <RequestAndCompareContent
          onChangeProduct1={this.onChangeProduct1}
          onChangeProduct2={this.onChangeProduct2}
          product1={this.state.product1}
          product2={this.state.product2}
          navigation={this.props.navigation}
        />
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
