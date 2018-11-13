import React from 'react'
import { List, ListItem, Content, Text } from 'native-base'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import Layout from '../constants/Layout'

const width = Layout.window.width

const SearchQuery = gql`
  query SearchItems($itemName: String!) {
    searchItems(name: $itemName) {
      id
      name
      category {
        id
      }
    }
  }
`
export const AddReviewSearchProduct = (props) => {
  return (
    <Query
      query={SearchQuery}
      variables={{
        itemName: props.itemName
      }}
    >
      {({ loading, error, data }) => {
        if (loading) return <Text style={textStyle}>Loading...</Text>
        if (error) return <Text style={textStyle}>Error : {error.message}</Text>
        if (data.searchItems.length === 0) return <Text style={textStyle}>찾은 결과가 없습니다.</Text>

        return (
          <Content>
            <List transparent style={{ width: 0.4 * Layout.window.width, alignItems: 'center' }}>
              {
                data.searchItems.map(({ id, name, category }) => {
                  return (
                    <ListItem key={id} onPress={() => props.onChangeItemNameAndId(name, id, category.id)}>
                      <Text>{name}</Text>
                    </ListItem>
                  )
                })
              }
            </List>
          </Content>
        )
      }
      }
    </Query>
  )
}

const textStyle = {
  margin: 0.05 * width
}
