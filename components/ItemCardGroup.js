import React from 'react'
import {
  Text,
  Content
} from 'native-base'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import ItemCard from './ItemCard'

function showItemCards ({ data: { loading, items } }) {
  if (loading) {
    return <Text>Loading...</Text>
  } else {
    return (
      <Content>
        {
          items.map((item, index) => {
            return (
              <ItemCard item={item} key={index} />
            )
          })
        }
      </Content>
    )
  }
}

export default graphql(gql`
  {
    items(category: MAIN) {
      id
      name
      reviews {
        id
        imgUrls
      }
    }
  }
`)(showItemCards)
