import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Badge, Button, Table } from 'reactstrap'
import * as ProductActions from '../../redux/actions/ProductsActions'

export const Productlist = () => {

    const products = useSelector(state => state.ProductlistReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ProductActions.getProducts())
    }, [])

    return (
        <div>
            <Badge color='primary' className='mb-1 w-100 py-2'>
                <h3>Productlist</h3>
            </Badge>

            <Table borderless dark hover responsive striped>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Product Name</th>
                        <th>Quantity per Unit</th>
                        <th>Unit Price</th>
                        <th>Units in Stock</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.productName}</td>
                            <td>{product.quantityPerUnit}</td>
                            <td>{product.unitPrice}</td>
                            <td>{product.unitsInStock}</td>
                            <td><Button color='success'>Add</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}
