import React from 'react'
import { Text, Left, Body, Right, CardItem } from 'native-base'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import Layout from '../constants/Layout'
import { Image } from 'react-native'

const width = Layout.window.width

let picArray = [
  { image: require('../assets/images/GradeStars/1-star.png') },
  { image: require('../assets/images/GradeStars/2-star.png') },
  { image: require('../assets/images/GradeStars/3-star.png') },
  { image: require('../assets/images/GradeStars/4-star.png') },
  { image: require('../assets/images/GradeStars/5-star.png') }
]

const CompareQuery = gql`
  query compareItems($itemIds: [ID!]!) {
    compareItems(itemIds: $itemIds) {
      name
      starNumAverages
    }
  }
`
export const CompareItemContent = (props) => {
  return (
    <Query
      query={CompareQuery}
      variables={{
        itemIds: [props.itemId1, props.itemId2]
      }}
    >
      {({ loading, error, data }) => {
        if (loading) return <Text style={textStyle}>Loading...</Text>
        if (error) return <Text style={textStyle}>Error : {error.message}</Text>

        return (
          data.compareItems.map(({ name, starNumAverages }) => {
            return (
              <CardItem key={name}>
                <Left>
                  <Image
                    source={picArray[starNumAverages[0] - 1].image}
                    style={{ width: 0.325 * Layout.window.width, height: 0.056 * Layout.window.width }}
                  />
                </Left>
                <Body>
                  <CardItem>
                    {
                      (name.length < 5)
                        ? <Text style={shortTextStyle}>{name}</Text>
                        : <Text>{name}</Text>
                    }
                  </CardItem>
                </Body>
                <Right>
                  <Image
                    source={picArray[starNumAverages[1] - 1].image}
                    style={{ width: 0.35 * Layout.window.width, height: 0.062 * Layout.window.width }}
                  />
                </Right>
              </CardItem>
            )
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

const shortTextStyle = {
  marginLeft: 0.03 * width
}