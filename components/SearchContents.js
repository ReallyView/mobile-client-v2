import React from 'react'
import { Card, CardItem, Content, Container, Text } from 'native-base'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const SearchQuery = gql`
  query SearchItems($name: String!) {
    searchItems(name: $name) {
      id
      name
    }
  }
`
export const SearchItem = (name) => (
  <Query
    query={SearchQuery}
    variables={name}
  >
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>
      if (error) return <Text>Error : {error.message}</Text>

      return (
        <Container>
          <Content>
            <Card transparent>
              {
                data.searchItems.map(({ id, name }) => {
                  return (
                    <CardItem key={id}>
                      <Text>{name}</Text>
                    </CardItem>
                  )
                })
              }
            </Card>
          </Content>
        </Container>
      )
    }
    }
  </Query>
)
