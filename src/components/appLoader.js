import React from 'react';
import { Row, Col, Preloader, } from 'react-materialize'
export default (props) => (
    <Row style={{ height: '100%', width: '100%' }}>
        <Col s={12} className="modal-bg">
            <Preloader flashing size='big' className="app-loader" />
        </Col>
    </Row>
)