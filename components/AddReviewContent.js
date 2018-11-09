import React from 'react'
import { Card, CardItem, Content, Textarea, Text, Left, Button, Body, Form } from 'native-base'
import AddReviewItemName from '../components/AddReviewItemName'
import AddReviewCategory from '../components/AddReviewCategory'
import AddReviewTitleName from '../components/AddReviewTitleName'
import AddReviewGradeGroup from '../components/AddReviewGradeGroup'
import AddReviewButtons from '../components/AddReviewButtons'
import { SearchProduct } from './AddReviewSearchProduct'

export default class RequestAndCompareContent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      addTitle: '',
      addItemName: '',
      addItemId: '',
      categoryId: 'null',
      text: '',
      grades: [{ name: '', starNum: 1 }],
      itemId: '',
      isItemReady: false
    }
    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.onChangeItemName = this.onChangeItemName.bind(this)
    this.onChangeCategoryId = this.onChangeCategoryId.bind(this)
    this.onIncreaseStarNum = this.onIncreaseStarNum.bind(this)
    this.onChangeGradeName = this.onChangeGradeName.bind(this)
    this.onClickAddGrade = this.onClickAddGrade.bind(this)
    this.onChangeReviewText = this.onChangeReviewText.bind(this)
    this.onChangeItemId = this.onChangeItemId.bind(this)
    this.onChangeItemNameAndId = this.onChangeItemNameAndId.bind(this)
  }
  onChangeTitle (title) {
    this.setState({
      addTitle: title
    })
  }
  onChangeItemName (itemName) {
    this.setState({
      addItemName: itemName,
      isItemReady: true
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
  onChangeItemId (id) {
    this.setState({
      addItemId: id
    })
  }
  onChangeItemNameAndId (name, id) {
    this.onChangeItemName(name)
    this.onChangeItemId(id)
    this.setState({
      isItemReady: false
    })
  }
  // 이미지 넣는 함수
  render () {
    return (
      <Content >
        <Card transparent>
          <CardItem>
            <AddReviewTitleName onChangeTitle={this.onChangeTitle} />
          </CardItem>
        </Card>
        <Card transparent>
          <CardItem>
            <AddReviewItemName addItemName={this.state.addItemName} onChangeItemName={this.onChangeItemName} />
            <AddReviewCategory categoryId={this.state.categoryId} onChangeCategoryId={this.onChangeCategoryId} />
          </CardItem>
        </Card>
        <CardItem>
          {
            (this.state.isItemReady && this.state.addItemName)
              ? <SearchProduct itemName={this.state.addItemName} onChangeItemNameAndId={this.onChangeItemNameAndId} /> : <Form />
          }
        </CardItem>
        <Card transparent style={{ marginTop: 25 }}>
          <Textarea
            rowSpan={5}
            bordered
            placeholder='리뷰를 입력하세요'
            onChangeText={(Text) => this.onChangeReviewText(Text)}
          />
        </Card>
        <Card transparent>
          <CardItem>
            <Left>
              <Text>평점</Text>
            </Left>
            <Body>
              <Button onPress={this.onClickAddGrade}>
                <Text>평점 추가하기</Text>
              </Button>
            </Body>
          </CardItem>
          <CardItem>
            <AddReviewGradeGroup
              grades={this.state.grades}
              onIncreaseStarNum={this.onIncreaseStarNum}
              onChangeGradeName={this.onChangeGradeName}
            />
          </CardItem>
        </Card>
        <AddReviewButtons />
      </Content>
    )
  }
}
