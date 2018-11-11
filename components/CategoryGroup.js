import React from 'react'
import {
  Content,
  View
} from 'native-base'

import Category from './Category'
import { categories } from '../constants/Categories'

export default class CategoryGroup extends React.Component {
  render () {
    let categoryComponents = []
    for (let i = 0; i < categories.length; i++) {
      if (i % 2 === 0) {
        if (i < categories.length - 1) {
          categoryComponents.push(
            <View style={{ flexDirection: 'row' }} key={i}>
              <Category
                id={categories[i].id}
                name={categories[i].name}
                onClickCategory={this.props.onClickCategory}
                icon={categories[i].icon}
              />
              <Category
                id={categories[i + 1].id}
                name={categories[i + 1].name}
                onClickCategory={this.props.onClickCategory}
                icon={categories[i + 1].icon}
              />
            </View>
          )
        } else {
          categoryComponents.push(
            <Category
              id={categories[i].id}
              name={categories[i].name}
              onClickCategory={this.props.onClickCategory}
              icon={categories[i].icon}
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
