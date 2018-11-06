import React from 'react'
import { Card, CardItem, Content, Textarea, Text } from 'native-base'
import AddReviewItemName from '../components/AddReviewItemName'
import AddReviewCategory from '../components/AddReviewCategory'
import AddReviewTitleName from '../components/AddReviewTitleName'
import AddReviewGradeGroup from '../components/AddReviewGradeGroup'

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
            <AddReviewCategory selectedCategory={this.props.selectedCategory} onChangeSelectedCategory={this.props.onChangeSelectedCategory} />
          </CardItem>
        </Card>
        <Card transparent>
          <Textarea rowSpan={5} bordered placeholder='리뷰를 입력하세요' />
        </Card>
        <Card transparent>
          <CardItem>
            <Text>평점</Text>
          </CardItem>
          <CardItem>
            <AddReviewGradeGroup
              grades={this.props.grades}
              onIncreaseStarNum={this.props.onIncreaseStarNum}
              onChangeGradeName={this.props.onChangeGradeName}
            />
          </CardItem>
        </Card>
      </Content>
    )
  }
}
