import React from 'react'
import {
  Container,
  Footer,
  FooterTab,
  Button,
  Icon,
  View,
  Input,
  Item,
  Text,
  Body,
  Content,
  Left,
  Textarea,
  Card
} from 'native-base'
import Headers from '../components/Headers'
import { RequestAndCompareSearchContents } from '../components/RequestAndCompareSearchContents'
import { CompareItemContent } from '../components/CompareItemContent'
import RequestButton from '../components/RequestButton'
import Layout from '../constants/Layout'

const width = Layout.window.width
const height = Layout.window.height

export default class RequestAndCompareView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      itemName1: '',
      itemName2: '',
      itemId1: '',
      itemId2: '',
      isItem1Selected: false,
      isItem2Selected: false,
      isCompared: false,
      isRequest: false,
      voteText: ''
    }
    this.onChangeItem1 = this.onChangeItem1.bind(this)
    this.onChangeItem2 = this.onChangeItem2.bind(this)
    this.onChangeItem1AndId = this.onChangeItem1AndId.bind(this)
    this.onChangeItem2AndId = this.onChangeItem2AndId.bind(this)
  }
  onChangeItem1 (itemName) {
    this.setState({
      itemName1: itemName,
      isItem1Selected: false
    })
  }
  onChangeItem2 (itemName) {
    this.setState({
      itemName2: itemName,
      isItem2Selected: false
    })
  }
  onChangeItem1AndId (itemName, itemId) {
    this.setState({
      itemName1: itemName,
      itemId1: itemId,
      isItem1Selected: true
    })
  }
  onChangeItem2AndId (itemName, itemId) {
    this.setState({
      itemName2: itemName,
      itemId2: itemId,
      isItem2Selected: true
    })
  }
  onChangeVoteText (text) {
    this.setState({
      voteText: text
    })
  }
  render () {
    return (
      <Container>
        <Headers navigation={this.props.navigation} headerTitle={'제품 비교하기'} navigate={'Home'} />
        <Body>
          <Content>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              width: width,
              marginTop: 0.05 * height
            }}>
              <Item style={{ width: 0.35 * width }}>
                <Input
                  placeholder='제품명'
                  onChangeText={(itemName) => this.onChangeItem1(itemName)}
                  value={this.state.itemName1} />
              </Item>
              <Text>VS</Text>
              <Item style={{ width: 0.35 * width }}>
                <Input
                  placeholder='제품명'
                  onChangeText={(itemName) => this.onChangeItem2(itemName)}
                  value={this.state.itemName2} />
              </Item>
            </View>
            <Button block transparent bordered
              onPress={() => {
                if (this.state.itemId1 && this.state.itemId2) {
                  this.setState({
                    isCompared: true
                  })
                }
              }}
              style={{
                margin: 0.03 * height,
                height: 0.05 * height
              }}
            >
              <Text>비교하기</Text>
            </Button>
            <View style={{ flexDirection: 'row', width: width }}>
              <Left>
                {
                  this.state.isItem1Selected
                    ? <View />
                    : <RequestAndCompareSearchContents
                      itemName={this.state.itemName1}
                      onChangeItemAndId={this.onChangeItem1AndId} />
                }
              </Left>
              <Body>
                {
                  this.state.isItem2Selected
                    ? <View />
                    : <RequestAndCompareSearchContents
                      itemName={this.state.itemName2}
                      onChangeItemAndId={this.onChangeItem2AndId} />
                }
              </Body>
            </View>
            {
              this.state.isCompared && this.state.itemId1 && this.state.itemId2
                ? <View>
                  <CompareItemContent itemId1={this.state.itemId1} itemId2={this.state.itemId2} />
                  <View style={{
                    flexDirection: 'row',
                    width: width,
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginTop: 0.03 * height
                  }}>
                    <Text>이 결과가 마음에 들지 않으신가요?</Text>
                    <Button transparent bordered
                      onPress={() => this.setState({
                        isRequest: true
                      })}
                      style={{
                        height: 0.05 * height
                      }}>
                      <Text>투표 요청하기</Text>
                    </Button>
                  </View>
                </View>
                : <View />
            }
            {
              this.state.isRequest
                ? <View>
                  <Card style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
                    <Textarea
                      rowSpan={5}
                      bordered
                      placeholder='글쓰기(10000자 이내)'
                      onChangeText={(text) => this.onChangeVoteText(text)}
                      maxLength={10000}
                    />
                  </Card>
                  <RequestButton
                    data={{ text: this.state.voteText, itemIds: [this.state.itemId1, this.state.itemId2] }}
                    navigation={this.props.navigation} />
                </View>
                : <View />
            }
          </Content>
        </Body>
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
