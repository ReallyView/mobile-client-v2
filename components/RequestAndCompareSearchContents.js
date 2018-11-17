import React from 'react'
import { List, ListItem, Content, Text, View } from 'native-base'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import Layout from '../constants/Layout'

const width = Layout.window.width

const SearchQuery = gql`
  query SearchItems($itemName: String!) {
    searchItems(name: $itemName) {
      id
      name
    }
  }
`
export const RequestAndCompareSearchContents = (props) => {
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
        if (!props.itemName) return <View />

        return (
          <Content>
            <List transparent style={{ width: 0.4 * width, alignItems: 'center' }}>
              {
                data.searchItems.map(({ id, name }) => {
                  return (
                    <ListItem key={id} onPress={() => props.onChangeItemAndId(name, id)}>
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
