import React from 'react'
import { useSelector } from 'react-redux'
import changeCategoryReducer from '../redux/reducers/ChangeCategoryReducers'


const CategoryList = () => {
    const currentCategory = useSelector(state => state.changeCategoryReducer)

  return (
    <div>
        <h1>Categories</h1>
        <h3>Selected Category:</h3>
    </div>
  )
}

export default CategoryList