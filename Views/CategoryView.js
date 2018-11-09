import React from 'react'
import {
  Container,
  Body,
  Footer,
  FooterTab,
  Button,
  Icon
} from 'native-base'

import CategoriesNameAndId, { categoriesNameAndId } from '../constants/Categories'
import CategoryHeader from '../components/CategoryHeader'
import CategoryGroup from '../components/CategoryGroup'
import CategoryItemCardGroup from '../components/CategoryItemCardGroup'

export default class CategoryView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isCategorySelected: false,
      categoryId: '',
      categoryName: ''
    }
    this.returnToCategoryView = this.returnToCategoryView.bind(this)
    this.onClickCategory = this.onClickCategory.bind(this)
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
              ? <CategoryItemCardGroup categoryId={this.state.categoryId} navigation={this.props.navigation} />
              : <CategoryGroup onClickCategory={this.onClickCategory} categoriesNameAndId={categoriesNameAndId} />
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
