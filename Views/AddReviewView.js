import React from 'react'
import { Container } from 'native-base'
import Headers from '../components/Headers'
import AddReviewContent from '../components/AddReviewContent'

export default class AddReviewView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      addTitle: '',
      addItemName: '',
      categoryId: undefined,
      text: '',
      grades: [{ name: '', starNum: 1 }],
      itemId: ''
    }
    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.onChangeItemName = this.onChangeItemName.bind(this)
    this.onChangeCategoryId = this.onChangeCategoryId.bind(this)
    this.onIncreaseStarNum = this.onIncreaseStarNum.bind(this)
    this.onChangeGradeName = this.onChangeGradeName.bind(this)
    this.onClickAddGrade = this.onClickAddGrade.bind(this)
    this.onChangeReviewText = this.onChangeReviewText.bind(this)
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
  onChangeCategoryId (value) {
    this.setState({
      categoryId: value
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
  onChangeReviewText (Text) {
    this.setState({
      text: Text
    })
  }
  // 이미지 넣는 함수
  render () {
    return (
      <Container>
        <Headers navigation={this.props.navigation} headerTitle={'리뷰추가'} />
        <AddReviewContent
          categoryId={this.state.categoryId}
          grades={this.state.grades}
          onChangeTitle={this.onChangeTitle}
          onChangeItemName={this.onChangeItemName}
          onChangeCategoryId={this.onChangeCategoryId}
          onIncreaseStarNum={this.onIncreaseStarNum}
          onChangeGradeName={this.onChangeGradeName}
          onClickAddGrade={this.onClickAddGrade}
          onChangeReviewText={this.onChangeReviewText}
        />
      </Container>
    )
  }
}
