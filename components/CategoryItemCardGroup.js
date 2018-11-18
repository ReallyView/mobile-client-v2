import React from 'react'
import {
  Content,
  Spinner,
  View,
  Picker,
  Icon
} from 'native-base'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import ItemCard from './ItemCard'
import Layout from '../constants/Layout'

const width = Layout.window.width
const height = Layout.window.height

function showCategoryItemCards ({ data: { loading, items, variables } }) {
  if (loading) {
    return <Spinner color='gray' />
  } else {
    return (
      <View>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 0.7 * width,
          marginBottom: -0.01 * height
        }}>
          <Picker
            mode='dropdown'
            style={{ width: undefined }}
            iosHeader='필터'
            iosIcon={<Icon name='ios-arrow-down-outline' />}
            selectedValue={variables.filter}
            onValueChange={variables.onFilterChange}
          >
            <Picker.Item label='최신순' value='RECENT' />
            <Picker.Item label='인기순' value='HOT' />
          </Picker>
        </View>
        <Content>
          {
            items.map((item) => {
              return (
                <ItemCard
                  item={item}
                  key={item.id}
                  navigation={variables.navigation} />
              )
            })
          }
        </Content>
      </View>
    )
  }
}

export default graphql(gql`
  query ($categoryId: ID!, $filter: ItemFilter) {
    items: items(categoryId: $categoryId, filter: $filter) {
      id
      name
      reviews {
        id,
        title,
        imgUrls
      }
    }
  }
`, {
  options: props => {
    return ({
      variables: {
        categoryId: props.categoryId,
        navigation: props.navigation,
        filter: props.filter,
        onFilterChange: props.onFilterChange
      }
    })
  }
})(showCategoryItemCards)
