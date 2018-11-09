import React from 'react'
import {
  Content,
  View
} from 'native-base'

import Category from './Category'

export default class CategoryGroup extends React.Component {
  render () {
    let categoryComponents = []
    for (let i = 0; i < this.props.categoriesNameAndId.length; i++) {
      if (i % 2 === 0) {
        if (i < this.props.categoriesNameAndId.length - 1) {
          categoryComponents.push(
            <View style={{ flexDirection: 'row' }} key={i}>
              <Category
                id={this.props.categoriesNameAndId[i].id}
                name={this.props.categoriesNameAndId[i].name}
                onClickCategory={this.props.onClickCategory}
              />
              <Category
                id={this.props.categoriesNameAndId[i + 1].id}
                name={this.props.categoriesNameAndId[i + 1].name}
                onClickCategory={this.props.onClickCategory}
              />
            </View>
          )
        } else {
          categoryComponents.push(
            <Category
              id={this.props.categoriesNameAndId[i].id}
              name={this.props.categoriesNameAndId[i].name}
              onClickCategory={this.props.onClickCategory}
            />
          )
        }
      }
    }
    return (
      <Content>
        {categoryComponents}
      </Content>
    )
  }
}
