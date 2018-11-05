import React from 'react'
import { Content, Form, Textarea } from 'native-base'
import AddReviewName from '../components/AddReviewName'

export default class RequestAndCompareContent extends React.Component {
  render () {
    return (
      <Content >
        <AddReviewName />
        <Form>
          <Textarea rowSpan={5} bordered placeholder='리뷰를 입력하세요.' />
        </Form>
      </Content>
    )
  }
}
