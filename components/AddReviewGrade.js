import React from 'react'
import { Input, Item, View } from 'native-base'
import { Image } from 'react-native'
import Layout from '../constants/Layout'
import { AddReviewRecommendedGradeNames } from './AddReviewRecommendedGradeNames'

let picArray = [
  { image: require('../assets/images/GradeStars/1-star.png') },
  { image: require('../assets/images/GradeStars/2-star.png') },
  { image: require('../assets/images/GradeStars/3-star.png') },
  { image: require('../assets/images/GradeStars/4-star.png') },
  { image: require('../assets/images/GradeStars/5-star.png') }
]

export default class AddReviewGrade extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      gradeName: '',
      isTyped: false,
      isSelected: false
    }
  }
  onClickGradeName (gradeName) {
    this.setState({
      gradeName,
      isSelected: true
    })
  }
  render () {
    return (
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Item style={{ width: 0.35 * Layout.window.width }}>
            <Input
              placeholder='Grade'
              onChangeText={(gradeName) => {
                this.setState({ gradeName })
                this.props.onChangeGradeName(gradeName, this.props.id)
              }}
              maxLength={5}
              value={this.state.gradeName}
              onFocus={() => this.setState({ isTyped: true })}
              onBlur={() => this.setState({ isTyped: false })}
            />
          </Item>
          <Item onPress={() => this.props.onIncreaseStarNum(this.props.starNum, this.props.id)} style={{ borderColor: 'transparent' }}>
            <Image
              source={picArray[this.props.starNum - 1].image}
              style={{ width: 0.5 * Layout.window.width, height: 0.09 * Layout.window.width }}
            />
          </Item>
        </View>
        {
          !this.state.isSelected && this.state.isTyped
            ? <AddReviewRecommendedGradeNames
              itemId={this.props.itemId || ''}
              name={this.state.gradeName}
              onClickGradeName={this.onClickGradeName.bind(this)} />
            : <View />
        }
      </View>
    )
  }
}
