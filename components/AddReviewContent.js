import React from 'react'
import { Card, CardItem, Content, Textarea, Text, Left, Button, Body, Form } from 'native-base'
import { Alert } from 'react-native'
import AddReviewItemName from '../components/AddReviewItemName'
import AddReviewCategory from '../components/AddReviewCategory'
import AddReviewTitleName from '../components/AddReviewTitleName'
import AddReviewGradeGroup from '../components/AddReviewGradeGroup'
import { AddReviewSearchProduct } from './AddReviewSearchProduct'
import AddReviewCreateReview from './AddReviewCreateReview'
import AddReviewButtons from './AddReviewButtons'
import AddReviewCreateReviewAndItem from './AddReviewCreateReviewAndItem'
import Layout from '../constants/Layout'

export default class RequestAndCompareContent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      itemName: '',
      itemId: '',
      categoryId: 'null',
      text: '',
      grades: [{ name: '', starNum: 1 }],
      isItemReady: true,
      isSubmitReady: false,
      enabled: true
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
    this.onClickSubmitButton = this.onClickSubmitButton.bind(this)
    this.onChangeIsSubmitReadyState = this.onChangeIsSubmitReadyState.bind(this)
  }
  onChangeTitle (title) {
    this.setState({
      title: title
    })
  }
  onChangeItemName (itemName) { // 검색창에서 아이템 이름을 입력할 떄 사용, 검색된 리스트를 누르기 전까지는 itemId는 '' 이다.
    this.setState({
      itemName: itemName,
      isItemReady: true,
      itemId: '',
      enabled: true
    })
  }
  onChangeCategoryId (value) {
    this.setState({
      categoryId: value
    })
  }
  onClickAddGrade () { // 평점 추가하기 버튼을 눌렀을 때 사용
    let temp = [{ name: '', starNum: 1 }]
    this.setState({
      grades: this.state.grades.concat(temp)
    })
  }
  onChangeGradeName (name, index) { // 평점 이름을 입력할 때 사용
    let temp = this.state.grades
    temp[index].name = name
    this.setState({
      grades: temp
    })
  }
  onIncreaseStarNum (starNum, index) { // 별 image를 눌렀을 때 사용
    let tempStarNum = (starNum < 5) ? starNum + 1 : 1
    let temp = this.state.grades
    temp[index].starNum = tempStarNum
    this.setState({
      grades: temp
    })
  }
  onChangeReviewText (Text) {
    this.setState({
      enabled: true
    })
  }
  onChangeItemId (id) {
    this.setState({
      itemId: id
    })
  }
  onChangeItemNameAndId (name, id, categoryId) {
    // 검색된 아이템을 누르면 itemName에 검색된 item 이름이 들어가고 itemId에 검색된 item Id가 들어감, 그리고 isItemReady가 false로 바뀌어 검색창이 안보이게 함, category가 자동적으로 바뀌게 함
    this.onChangeItemName(name)
    this.onChangeItemId(id)
    this.onChangeCategoryId(categoryId)
    this.setState({
      isItemReady: false,
      enabled: false
    })
  }
  onChangeIsSubmitReadyState () {
    this.setState({
      isSubmitReady: true
    })
  }
  onClickSubmitButton () {
    // 제출하기 버튼을 눌렀을 때 사용, 만약 입력칸중 빈칸이 하나라도 있으면 경고가 나오게 하고, 아니면 제출하시겟습니까? 메세지가 나옴OK버튼을 누르면 isSubmitReady값이 true로 바뀌면서 mutation 보냄
    if (this.state.itemName && this.state.text && this.state.title && this.state.grades[0].name && this.state.categoryId) {
      Alert.alert(
        'Message',
        '제출하시겠습니까?',
        [
          { text: 'Cancel' },
          {
            text: 'OK',
            onPress: this.onChangeIsSubmitReadyState
          }
        ]
      )
    } else {
      Alert.alert(
        '경고',
        '빈칸을 모두 입력 해주세요.'
      )
    }
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
            <AddReviewItemName itemName={this.state.itemName} onChangeItemName={this.onChangeItemName} />
            <AddReviewCategory categoryId={this.state.categoryId} onChangeCategoryId={this.onChangeCategoryId} enabled={this.state.enabled} />
          </CardItem>
        </Card>
        <CardItem>
          {
            (this.state.isItemReady && this.state.itemName) // 아이템이 검색되지 않거나 검색을 다했으면 serach 결과가 보이지 않도록 함.
              ? <AddReviewSearchProduct itemName={this.state.itemName} onChangeItemNameAndId={this.onChangeItemNameAndId} /> : <Form />
          }
        </CardItem>
        <Card transparent>
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
              <Button onPress={this.onClickAddGrade} bordered>
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
        <AddReviewButtons onClickSubmitButton={this.onClickSubmitButton} />
        {
          (this.state.isSubmitReady && this.state.itemId) // 제출하기 버튼에서 예를 눌렀을 때, 그리고 itemId가 있을 때(이미 존재하는 제품일 때) mutation을 보내도록 함
            ? <AddReviewCreateReview
              data={{
                title: this.state.title,
                text: this.state.text,
                grades: this.state.grades,
                itemId: this.state.itemId
              }}
              navigation={this.props.navigation}
            /> : <Form />
        }
        {
          (this.state.isSubmitReady && (!(this.state.itemId) && this.state.itemName))
            ? <AddReviewCreateReviewAndItem
              data={{ title: this.state.title, text: this.state.text, grades: this.state.grades, itemName: this.state.itemName, categoryId: this.state.categoryId }}
              navigation={this.props.navigation}
            /> : <Form />
        }
      </Content>
    )
  }
}
