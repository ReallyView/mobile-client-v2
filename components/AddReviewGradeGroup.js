import React from 'react'
import { ScrollView } from 'react-native'
import AddReviewGrade from './AddReviewGrade'

export default class AddReviewGradeGroup extends React.Component {
  render () {
    return (
      <ScrollView>
        {
          this.props.grades.map((grade, id) => {
            return (
              <AddReviewGrade
                key={id}
                id={id}
                itemId={this.props.itemId}
                starNum={grade.starNum}
                onIncreaseStarNum={this.props.onIncreaseStarNum}
                onChangeGradeName={this.props.onChangeGradeName}
              />
            )
          }
          )
        }
      </ScrollView>
    )
  }
}
