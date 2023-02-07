import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Badge, ListGroup, ListGroupItem } from 'reactstrap'
import * as CategoryActions from '../../redux/actions/CategoryAction'



const CategoryList = () => {
  const categories = useSelector(state => state.CategorylistReducer)
  const currentCategory = useSelector(state => state.ChangeCategoryReducer)


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(CategoryActions.getCategories())
  }, [])

  const selected = (category) => {
    dispatch(CategoryActions.changeCategory(category))
  }

  return (
    <div>
      <Badge color='danger' className='mb-1 w-100 px-2'>
        <h3>Categories</h3>
      </Badge>
      {categories.map(category => (
        <ListGroup key={category.id}>
          <ListGroupItem
            active={category.id === currentCategory.id}
            onClick={() => selected(category)}>
            {category.categoryName}
          </ListGroupItem>
        </ListGroup>
      ))}
    </div>
  )
}

export default CategoryList