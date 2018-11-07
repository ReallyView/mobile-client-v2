import React from 'react'
import { Content, Card, CardItem, Textarea, Body, Text, Button, Right, Left } from 'native-base'
import RequestAndCompareInput from './RequestAndCompareInput'
import RequestAndCompareButton from './RequestAndCompareButton'
import { CompareItem1 } from './CompareContent1'
import { CompareItem2 } from './CompareContent2'

export default class RequestAndCompareContent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isRequest: false,
      isCompare: false
    }
    this.onClickCompareButton = this.onClickCompareButton.bind(this)
    this.onClickRequestButton = this.onClickRequestButton.bind(this)
    this.onChangeText = this.onChangeText.bind(this)
  }
  onClickRequestButton () {
    this.setState({
      isRequest: true,
      isCompare: false,
      text: ''
    })
  }
  onClickCompareButton () {
    this.setState({
      isCompare: true,
      isRequest: false
    })
  }
  onChangeText (Text) {
    this.setState({
      text: Text
    })
  }
  render () {
    return (
      <Content>
        <Card transparent>
          <CardItem>
            <RequestAndCompareInput
              onChangeProduct1={this.props.onChangeProduct1}
              onChangeProduct2={this.props.onChangeProduct2}
              product1={this.props.product1}
              product2={this.props.product2}
            />
          </CardItem>
          <RequestAndCompareButton onClickRequestButton={this.onClickRequestButton} onClickCompareButton={this.onClickCompareButton} />
          <CardItem>
            <Left>
              {
                (this.props.product1)
                  ? <CompareItem1 product1={this.props.product1} onChangeProduct1={this.props.onChangeProduct1} /> : <Body />
              }
            </Left>
            <Body>
              {
                (this.props.product2)
                  ? <CompareItem2 product2={this.props.product2} onChangeProduct2={this.props.onChangeProduct2} /> : <Body />
              }
            </Body>
          </CardItem>
          {
            (this.state.isRequest)
              ? <Textarea
                rowSpan={5}
                bordered
                placeholder='글쓰기(10000자 이내)'
                onChangeText={(Text) => this.onChangeText(Text)}
              /> : <Body />
          }
          <CardItem>
            <Right>
              {
                (this.state.isRequest)
                  ? <Button><Text>제출하기</Text></Button> : <Body />
              }
            </Right>
          </CardItem>
        </Card>
      </Content>
    )
  }
}
