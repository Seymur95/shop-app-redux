import React from 'react'
import { Col, Row } from 'reactstrap'
import CategoryList from '../categories/CategoryList'

export const Dashboard = () => {
    return (
        <div>
            <Row>
                <Col xs='3'>
                    <CategoryList />
                </Col>
            </Row>
        </div>
    )
}


