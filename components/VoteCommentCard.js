import React from 'react'
import { Card, CardItem, Text, Thumbnail, Item, View, Right, Button, Input, Content } from 'native-base'

import Layout from '../constants/Layout'

const width = Layout.window.width
const height = Layout.window.height

export default class VoteCommentCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isEdit: false,
      comment: this.props.comment,
      userId: this.props.userId,
      text: this.props.comment.text
    }
    this.onChangeText = this.onChangeText.bind(this)
  }
  onChangeText (text) {
    this.setState({
      text: text
    })
  }
  render () {
    return (
      <Item style={{ borderBottomWidth: 0, marginTop: 0.04 * width }}>
        <Card transparent>
          <CardItem>
            {
              (this.state.comment.author.profileImgUrl)
                ? <Thumbnail circular style={{ margin: 0.02 * width, marginLeft: 0.04 * width }} source={{ uri: (this.state.comment.author.profileImgUrl) }} />
                : <Thumbnail circular style={{ margin: 0.02 * width, marginLeft: 0.04 * width }} source={require('../assets/images/profileIcon.png')} />
            }
            <View>
              {
                (this.state.isEdit)
                  ? <Card style={{ borderRadius: 0.04 * width }}>
                    <Text style={{ fontWeight: 'bold', margin: 0.02 * width, fontSize: 0.03 * width }}>{this.state.comment.author.name}</Text>
                    <Input
                      value={this.state.text}
                      onChangeText={(text) => this.onChangeText(text)}
                      borderWidth={1}
                    />
                  </Card>
                  : <Card style={{ borderRadius: 0.05 * width, backgroundColor: '#DFDFDF' }}>
                    <Text style={{ fontWeight: 'bold', margin: 0.02 * width, fontSize: 0.03 * width }}>{this.state.comment.author.name}</Text>
                    <Text style={{ margin: 0.02 * width, fontSize: 0.04 * width }}>{this.state.comment.text}</Text>
                  </Card>
              }
            </View>
          </CardItem>
          {
            (this.state.userId === this.state.comment.author.id)
              ? <View style={{ flexDirection: 'row', marginLeft: 0.2 * width }}>
                <Button
                  transparent
                  onPress={this.onChangeIsEdit}
                >
                  <Text style={{ color: 'gray', fontSize: 0.03 * width }}>수정하기</Text>
                </Button>
                <Button
                  transparent
                >
                  <Text style={{ color: 'gray', fontSize: 0.03 * width }}>삭제하기</Text>
                </Button>
              </View>
              : <View />
          }
        </Card>
      </Item>
    )
  }
}
