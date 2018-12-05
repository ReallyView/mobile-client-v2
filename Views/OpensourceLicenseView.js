import React from 'react'
import {
  Container,
  Text,
  Content
} from 'native-base'
import Headers from '../components/Headers'
import OpensourceLicense from '../constants/OpensourceLicense'

export default class MoreView extends React.Component {
  render () {
    return (
      <Container>
        <Headers
          navigation={this.props.navigation}
          headerTitle={'오픈소스 라이선스'}
          navigate={'More'}
        />
        <Content>
          <Text>
            {OpensourceLicense}
          </Text>
        </Content>
      </Container>
    )
  }
}
