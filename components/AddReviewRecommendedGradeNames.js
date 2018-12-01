import React from 'react'
import { List, ListItem, Content, Text, View } from 'native-base'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import Layout from '../constants/Layout'

const width = Layout.window.width

const recommendedGradeNames = gql`
  query ($itemId: ID!, $name: String!) {
    recommendGradeName(itemId: $itemId, name: $name) {
      id
      name
      frequency
    }
  }
`

export const AddReviewRecommendedGradeNames = (props) => {
  return (
    <Query
      query={recommendedGradeNames}
      variables={{
        itemId: props.itemId,
        name: props.name
      }}
    >
      {({ loading, error, data }) => {
        if (loading) return <Text style={textStyle}>Loading...</Text>
        if (error) return <View />
        if (data.recommendGradeName.length === 0) return <View />

        return (
          <Content>
            <List transparent style={{ width: 0.95 * width }}>
              {
                data.recommendGradeName.map(({ id, name, frequency }) => {
                  return (
                    <ListItem style={{ width: 0.95 * width }} key={id} onPress={() => props.onClickGradeName(name)}>
                      <Text>{`${name}  (${frequency})`}</Text>
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
