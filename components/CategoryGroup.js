import React from 'react'
import {
  Text,
  Content,
  View
} from 'native-base'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import Category from './Category'

function showCategories ({ data: { loading, categories, variables } }) {
  if (loading) {
    return <Text>Loading...</Text>
  } else {
    let categoryComponents = []
    for (let i = 0; i < categories.length; i++) {
      if (i % 2 === 0) {
        categoryComponents.push(
          <View style={{ flexDirection: 'row' }} key={i}>
            <Category
              id={categories[i].id}
              name={categories[i].name}
              onClickCategory={variables.onClickCategory}
            />
            <Category
              id={categories[i + 1].id}
              name={categories[i + 1].name}
              onClickCategory={variables.onClickCategory}
            />
          </View>
        )
      }
    }
    return (
      <Content>
        {categoryComponents}
      </Content>
    )
  }
}

export default graphql(gql`
  query {
    categories {
      id
      name
    }
  }
`, {
  options: props => {
    return ({
      variables: {
        onClickCategory: props.onClickCategory
      }
    })
  }
})(showCategories)
