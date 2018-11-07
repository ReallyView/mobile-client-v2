import React from 'react'
import { Content, Card, CardItem } from 'native-base'
import RequestAndCompareInput from './RequestAndCompareInput'

export default class RequestAndCompareContent extends React.Component {
  render () {
    return (
      <Content>
        <Card transparent>
          <CardItem>
            <RequestAndCompareInput />
          </CardItem>
        </Card>
      </Content>
    )
  }
}
