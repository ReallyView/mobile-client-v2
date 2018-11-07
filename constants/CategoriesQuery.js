import React from 'react'
import { Text, Form } from 'native-base'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import Layout from '../constants/Layout'

const width = Layout.window.width

export const categoriesNameAndIdArray = []
export const itemNameAndIdArray = []

const CategoriesQuery = gql`
  query {
    categories {
      id
      name
      items {
        id
        name
      }
    }
  }
`

export const Categories = () => {
  return (
    <Query
      query={CategoriesQuery}
    >
      {({ loading, error, data }) => {
        if (loading) return <Form />
        if (error) return <Text style={textStyle}>Error : {error.message}</Text>
        for (let i = 0; i < data.categories.length; i++) {
          data.categories[i].items.map(({ id, name }) => {
            itemNameAndIdArray.push({ name: name, id: id })
          })
        }
        return (
          data.categories.map(({ id, name }) => {
            categoriesNameAndIdArray.push({ name: name, id: id })
          })
        )
      }
      }
    </Query>
  )
}

const textStyle = {
  margin: 0.05 * width
}
