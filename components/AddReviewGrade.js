import React from 'react'
import { Input, Item, Body, Left } from 'native-base'
import { Image } from 'react-native'
import Layout from '../constants/Layout'

let picArray = [
  { image: require('../assets/images/GradeStars/1-star.png') },
  { image: require('../assets/images/GradeStars/2-star.png') },
  { image: require('../assets/images/GradeStars/3-star.png') },
  { image: require('../assets/images/GradeStars/4-star.png') },
  { image: require('../assets/images/GradeStars/5-star.png') }
]

export default class AddReviewGrade extends React.Component {
  render () {
    return (
      <Left>
        <Item style={{ width: 0.35 * Layout.window.width }}>
          <Input
            placeholder='Grade'
            onChangeText={(gradeName) => this.props.onChangeGradeName(gradeName, this.props.id)}
          />
        </Item>
        <Body>
          <Item onPress={() => this.props.onIncreaseStarNum(this.props.starNum, this.props.id)} style={{ borderColor: 'transparent' }}>
            <Image
              source={picArray[this.props.starNum - 1].image}
              style={{ width: 0.5 * Layout.window.width, height: 0.09 * Layout.window.width }}
            />
          </Item>
        </Body>
      </Left>
    )
  }
}
