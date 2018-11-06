import React from 'react'
import { Card, CardItem, Content, Textarea, Text, Left, Button, Body } from 'native-base'
import AddReviewItemName from '../components/AddReviewItemName'
import AddReviewCategory from '../components/AddReviewCategory'
import AddReviewTitleName from '../components/AddReviewTitleName'
import AddReviewGradeGroup from '../components/AddReviewGradeGroup'
import AddReviewButtons from '../components/AddReviewButtons'

export default class RequestAndCompareContent extends React.Component {
  render () {
    return (
      <Content >
        <Card transparent>
          <CardItem>
            <AddReviewTitleName onChangeTitle={this.props.onChangeTitle} />
          </CardItem>
        </Card>
        <Card transparent>
          <CardItem>
            <AddReviewItemName onChangeItemName={this.props.onChangeItemName} />
            <AddReviewCategory categoryId={this.props.categoryId} onChangeCategoryId={this.props.onChangeCategoryId} />
          </CardItem>
        </Card>
        <Card transparent style={{ marginTop: 25 }}>
          <Textarea
            rowSpan={5}
            bordered
            placeholder='리뷰를 입력하세요'
            onChangeText={(Text) => this.props.onChangeReviewText(Text)}
          />
        </Card>
        <Card transparent>
          <CardItem>
            <Left>
              <Text>평점</Text>
            </Left>
            <Body>
              <Button onPress={this.props.onClickAddGrade}>
                <Text>평점 추가하기</Text>
              </Button>
            </Body>
          </CardItem>
          <CardItem>
            <AddReviewGradeGroup
              grades={this.props.grades}
              onIncreaseStarNum={this.props.onIncreaseStarNum}
              onChangeGradeName={this.props.onChangeGradeName}
            />
          </CardItem>
        </Card>
        <AddReviewButtons />
      </Content>
    )
  }
}
