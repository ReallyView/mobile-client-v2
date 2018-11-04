import React from 'react'
import { Content, Form, Textarea } from 'native-base'
import AddReviewName from '../components/AddReviewName'
import AddReviewPicAndCategory from '../components/AddReviewPicAndCategory'

export default class RequestAndCompareContent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: undefined
    }
  }
  onValueChange (value) {
    this.setState({
      selected: value
    })
  }
  render () {
    return (
      <Content >
        <AddReviewName />
        <AddReviewPicAndCategory />
        <Form>
          <Textarea rowSpan={5} bordered placeholder='리뷰를 입력하세요.' />
        </Form>
      </Content>
    )
  }
}
