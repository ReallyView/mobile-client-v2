import React from 'react'
import { Container } from 'native-base'
import AddReviewHeader from '../components/AddReviewHeader'
import AddReviewContent from '../components/AddReviewContent'

export default class AddReviewView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      addTitle: '',
      addItemName: '',
      selectedCategory: undefined,
      grades: [{ name: '', starNum: 1 }]
    }
    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.onChangeItemName = this.onChangeItemName.bind(this)
    this.onChangeSelectedCategory = this.onChangeSelectedCategory.bind(this)
    this.onIncreaseStarNum = this.onIncreaseStarNum.bind(this)
    this.onChangeGradeName = this.onChangeGradeName.bind(this)
    this.onClickAddGrade = this.onClickAddGrade.bind(this)
  }
  onChangeTitle (title) {
    this.setState({
      addTitle: title
    })
  }
  onChangeItemName (itemName) {
    this.setState({
      addItemName: itemName
    })
  }
  onChangeSelectedCategory (value) {
    this.setState({
      selectedCategory: value
    })
  }
  onClickAddGrade () {
    let temp = [{ name: '', starNum: 1 }]
    this.setState({
      grades: this.state.grades.concat(temp)
    })
  }
  onChangeGradeName (name, index) {
    let temp = this.state.grades
    temp[index].name = name
    this.setState({
      grades: temp
    })
  }
  onIncreaseStarNum (starNum, index) {
    let tempStarNum = (starNum < 5) ? starNum + 1 : 1
    let temp = this.state.grades
    temp[index].starNum = tempStarNum
    this.setState({
      grades: temp
    })
  }
  // 이미지 넣는 함수
  render () {
    return (
      <Container>
        <AddReviewHeader navigation={this.props.navigation} />
        <AddReviewContent
          selectedCategory={this.state.selectedCategory}
          grades={this.state.grades}
          onChangeTitle={this.onChangeTitle}
          onChangeItemName={this.onChangeItemName}
          onChangeSelectedCategory={this.onChangeSelectedCategory}
          onIncreaseStarNum={this.onIncreaseStarNum}
          onChangeGradeName={this.onChangeGradeName}
          onClickAddGrade={this.onClickAddGrade}
        />
      </Container>
    )
  }
}
