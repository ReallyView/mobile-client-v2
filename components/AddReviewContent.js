import React from 'react'
import { Card, CardItem, Content, Textarea } from 'native-base'
import AddReviewItemName from '../components/AddReviewItemName'
import AddReviewCategory from '../components/AddReviewCategory'
import AddReviewTitleName from '../components/AddReviewTitleName'

export default class RequestAndCompareContent extends React.Component {
  render () {
    return (
      <Content >
        <Card transparent>
          <CardItem>
            <AddReviewTitleName />
          </CardItem>
        </Card>
        <Card transparent>
          <CardItem>
            <AddReviewItemName />
            <AddReviewCategory />
          </CardItem>
        </Card>
        <Textarea rowSpan={5} bordered placeholder='리뷰를 입력하세요.' />
      </Content>
    )
  }
}
