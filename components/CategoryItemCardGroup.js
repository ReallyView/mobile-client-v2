import React from 'react'
import {
  Content,
  Spinner
} from 'native-base'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import ItemCard from './ItemCard'

function showCategoryItemCards ({ data: { loading, items, variables } }) {
  if (loading) {
    return <Spinner color='gray' />
  } else {
    return (
      <Content>
        {
          items.map((item, index) => {
            return (
              <ItemCard
                item={item}
                key={index}
                navigation={variables.navigation} />
            )
          })
        }
      </Content>
    )
  }
}

export default graphql(gql`
  query ($categoryId: ID!) {
    items: items(categoryId: $categoryId) {
      id
      name
      reviews {
        id,
        title,
        author {
          id,
          profileImgUrl,
          name
        },
        imgUrls,
        text,
        grades {
          id,
          name,
          starNum
        },
        likeNum,
        dislikeNum
      }
    }
  }
`, {
  options: props => {
    return ({
      variables: {
        categoryId: props.categoryId,
        navigation: props.navigation
      }
    })
  }
})(showCategoryItemCards)
