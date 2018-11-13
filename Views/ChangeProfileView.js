import React from 'react'
import { Container } from 'native-base'
import Headers from '../components/Headers'
import ChangeProfileContent from '../components/ChangeProfileContent'

export default class ChangeProfileView extends React.Component {
  render () {
    return (
      <Container>
        <Headers headerTitle={'프로필 수정'} hasTab navigation={this.props.navigation} navigate={'More'} />
        <ChangeProfileContent
          navigation={this.props.navigation}
        />
      </Container>
    )
  }
}