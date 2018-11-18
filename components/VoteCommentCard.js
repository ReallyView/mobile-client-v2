import React from 'react'
import { Card, CardItem, Text, Thumbnail, Item, View } from 'native-base'

import Layout from '../constants/Layout'

const width = Layout.window.width
const height = Layout.window.height

export default class VoteCommentCard extends React.Component {
  render () {
    return (
      this.props.vote.comments.map((comment, index) => {
        return (
          <Item key={index} style={{ borderBottomWidth: 0, marginTop: 0.04 * width }}>
            <Card transparent>
              <CardItem>
                {
                  (comment.author.profileImgUrl)
                    ? <Thumbnail circular style={{ margin: 0.02 * width, marginLeft: 0.04 * width }} source={{ uri: (comment.author.profileImgUrl) }} />
                    : <Thumbnail circular style={{ margin: 0.02 * width, marginLeft: 0.04 * width }} source={require('../assets/images/profileIcon.png')} />
                }
                <View>
                  <Card style={{borderRadius: 0.02 * width }}>
                    <Text style={{ fontWeight: 'bold', margin: 0.02 * width, fontSize: 0.03 * width }}>{comment.author.name}</Text>
                    <Text style={{ margin: 0.02 * width, fontSize: 0.04 * width }}>{comment.text}</Text>
                  </Card>
                </View>
              </CardItem>
            </Card>
          </Item>
        )
      })
    )
  }
}
