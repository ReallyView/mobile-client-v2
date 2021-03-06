import React from 'react'
import {
  Content,
  Spinner,
  View
} from 'native-base'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import ItemCard from './ItemCard'

function showItemCards ({ data: { loading, items, variables } }) {
  if (loading) {
    return <Spinner color='gray' />
  } else {
    return (
      <Content style={{ backgroundColor: '#e9ebee' }}>
        {
          items && items.length ? items.map((item) => {
            return (
              <ItemCard
                item={item}
                key={item.id}
                navigation={variables.navigation}
                subscribedUsers={item.subscribedBy}
              />
            )
          })
            : <View />
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
        imgUrls
      }
      subscribedBy {
        id
      }
    }
  }
`, {
  options: props => {
    return ({
      variables: {
        navigation: props.navigation
      }
    })
  }
})(showItemCards)
