import React from 'react'
import {
  Text,
  Content
} from 'native-base'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import ItemCard from './ItemCard'

function showItemCards ({ data: { loading, items, variables } }) {
  if (loading) {
    return <Text>Loading...</Text>
  } else {
    return (
      <Content>
        {
          items.map((item, index) => {
            return (
              <ItemCard
                item={item}
                key={index}
                onClickItemCard={variables.onClickItemCard}
                navigation={variables.navigation} />
            )
          })
        }
      </Content>
    )
  }
}

export default graphql(gql`
  query {
    items: recommendedItems {
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
        onClickItemCard: props.onClickItemCard,
        navigation: props.navigation
      }
    })
  }
})(showItemCards)
