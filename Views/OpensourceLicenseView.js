import React from 'react'
import {
  Container,
  Text,
  Content,
  Body
} from 'native-base'
import Headers from '../components/Headers'
import opensourceLicense from '../constants/OpensourceLicense'
import Layout from '../constants/Layout'

const width = Layout.window.width
const height = Layout.window.height

export default class MoreView extends React.Component {
  render () {
    return (
      <Container>
        <Headers
          navigation={this.props.navigation}
          headerTitle={'오픈소스 라이선스'}
          navigate={'More'}
        />
        <Body>
          <Content>
            <Text style={{ width, height }}>
              {opensourceLicense}
            </Text>
          </Content>
        </Body>
      </Container>
    )
  }
}
