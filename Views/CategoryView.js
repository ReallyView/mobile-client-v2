import React from 'react'
import {
  Container,
  Body,
  Footer,
  FooterTab,
  Button,
  Icon
} from 'native-base'

import CategoryHeader from '../components/CategoryHeader'
import CategoryGroup from '../components/CategoryGroup'
import CategoryItemCardGroup from '../components/CategoryItemCardGroup'

export default class CategoryView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isCategorySelected: false,
      categoryId: '',
      categoryName: '',
      filter: 'HOT'
    }
    this.returnToCategoryView = this.returnToCategoryView.bind(this)
    this.onClickCategory = this.onClickCategory.bind(this)
    this.onFilterChange = this.onFilterChange.bind(this)
  }
  returnToCategoryView () {
    this.setState({
      isCategorySelected: false
    })
  }
  onClickCategory (categoryId, categoryName) {
    this.setState({
      isCategorySelected: true,
      categoryId: categoryId,
      categoryName: categoryName
    })
  }
  onFilterChange (filter) {
    this.setState({
      filter: filter
    })
  }
  render () {
    return (
      <Container>
        <CategoryHeader
          navigation={this.props.navigation}
          isCategorySelected={this.state.isCategorySelected}
          returnToCategoryView={this.returnToCategoryView}
          categoryName={this.state.categoryName}
        />
        <Body>
          {
            this.state.isCategorySelected
              ? <CategoryItemCardGroup
                categoryId={this.state.categoryId}
                navigation={this.props.navigation}
                onFilterChange={this.onFilterChange}
                filter={this.state.filter} />
              : <CategoryGroup onClickCategory={this.onClickCategory} />
          }
        </Body>
        <Footer>
          <FooterTab>
            <Button onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name='home' />
            </Button>
            <Button active>
              <Icon active name='menu' />
            </Button>
            <Button onPress={() => this.props.navigation.navigate('RequestAndCompare')}>
              <Icon name='navigate' />
            </Button>
            <Button onPress={() => this.props.navigation.navigate('More')}>
              <Icon name='ios-more' />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}
