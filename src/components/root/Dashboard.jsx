import React from 'react'
import { Col, Row } from 'reactstrap'
import CategoryList from '../categories/CategoryList'
import { Productlist } from '../products/Productlist'

export const Dashboard = () => {
    return (
        <div>
            <Row className='mt-2'>
                <Col xs='3'>
                    <CategoryList />
                </Col>
                <Col xs='9'>
                    <Productlist />
                </Col>
            </Row>
        </div>
    )
}


