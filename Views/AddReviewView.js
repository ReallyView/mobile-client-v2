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
      selectedCategory: undefined
    }
    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.onChangeItemName = this.onChangeItemName.bind(this)
    this.onChangeSelectedCategory = this.onChangeSelectedCategory.bind(this)
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
    console.log(value)
  }
  render () {
    return (
      <Container>
        <AddReviewHeader navigation={this.props.navigation} />
        <AddReviewContent
          selectedCategory={this.state.selectedCategory}
          onChangeTitle={this.onChangeTitle}
          onChangeItemName={this.onChangeItemName}
          onChangeSelectedCategory={this.onChangeSelectedCategory}
        />
      </Container>
    )
  }
}
