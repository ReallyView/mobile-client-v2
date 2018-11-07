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
      itemName1: '',
      itemName2: ''
    }
    this.onChangeItemName1 = this.onChangeItemName1.bind(this)
    this.onChangeItemName2 = this.onChangeItemName2.bind(this)
  }
  onChangeItemName1 (itemName) {
    this.setState({
      itemName1: itemName
    })
  }
  onChangeItemName2 (itemName) {
    this.setState({
      itemName2: itemName
    })
  }
  render () {
    return (
      <Container>
        <Headers navigation={this.props.navigation} headerTitle={'비교하기/요청하기'} />
        <RequestAndCompareContent onChangeItemName1={this.onChangeItemName1} onChangeItemName2={this.onChangeItemName2} />
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
