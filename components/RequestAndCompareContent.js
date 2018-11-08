import React from 'react'
import { Content, Card, CardItem, Textarea, Body, Text, Button, Right, Left } from 'native-base'
import { Alert } from 'react-native'
import RequestAndCompareInput from './RequestAndCompareInput'
import RequestAndCompareButton from './RequestAndCompareButton'
import { CompareItem1 } from './CompareSearchProduct1'
import { CompareItem2 } from './CompareSearchProduct2'
import { CompareItems } from './CompareContent'

export default class RequestAndCompareContent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isRequest: false,
      isCompare: false,
      text: '',
      productId1: '',
      productId2: ''
    }
    this.onClickCompareButton = this.onClickCompareButton.bind(this)
    this.onClickRequestButton = this.onClickRequestButton.bind(this)
    this.onChangeText = this.onChangeText.bind(this)
    this.onChangeProductId1 = this.onChangeProductId1.bind(this)
    this.onChangeProductId2 = this.onChangeProductId2.bind(this)
    this.onChangeProductNameAndId1 = this.onChangeProductNameAndId1.bind(this)
    this.onChangeProductNameAndId2 = this.onChangeProductNameAndId2.bind(this)
  }
  onClickRequestButton () {
    if (!(this.state.productId1 && this.state.productId2)) {
      Alert.alert('경고', '제품명을 입력하세요.')
    } else {
      this.setState({
        isRequest: true,
        isCompare: false
      })
    }
  }
  onClickCompareButton () {
    if (!(this.state.productId1 && this.state.productId2)) {
      Alert.alert('경고', '제품명을 입력하세요.')
    } else {
      this.setState({
        isCompare: true,
        isRequest: false
      })
    }
  }
  onChangeText (Text) {
    this.setState({
      text: Text
    })
  }
  onChangeProductId1 (id) {
    this.setState({
      productId1: id
    })
  }
  onChangeProductId2 (id) {
    this.setState({
      productId2: id
    })
  }
  onChangeProductNameAndId1 (itemName, id) {
    this.props.onChangeProduct1(itemName)
    this.onChangeProductId1(id)
  }
  onChangeProductNameAndId2 (itemName, id) {
    this.props.onChangeProduct2(itemName)
    this.onChangeProductId2(id)
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
                  ? <CompareItem1 product1={this.props.product1} onChangeProductNameAndId1={this.onChangeProductNameAndId1} /> : <Body />
              }
            </Left>
            <Body>
              {
                (this.props.product2)
                  ? <CompareItem2 product2={this.props.product2} onChangeProductNameAndId2={this.onChangeProductNameAndId2} /> : <Body />
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
          {
            (this.state.isCompare)
              ? <CompareItems itemIds={[this.state.productId1, this.state.productId2]} /> : <Body />
          }
        </Card>
      </Content>
    )
  }
}
