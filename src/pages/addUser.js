import React, { Component } from 'react';
import { Row, Col, Input, Icon, Card, Button } from 'react-materialize';
export default class AddParticipant extends Component {
    state = {
        firstName: '',
        middleName: '',
        lastName: '',
        telephone: '',
        mobile: '',
        email: '',
        gender: '',
        dob: '',
        remarks: '',
        centerID: '',
        sheet: '',
        age: '',
        ageYear: '',
        createdOn: '',
        modifiedOn: '',
        itrebID: ''
    }

    changeInState = (parameter, value) => {
        let state = this.state;
        state[parameter] = value;
        this.setState(state);
    }

    addUser = () => {
        console.log(JSON.stringify(this.state));
    }

    render() {
        return (
            <div className="container"><Card>
                <Row>
                    <Col s={12} m={6} l={4}>
                        <Input
                            s={12}
                            label="First Name"
                            value={this.state.firstName}
                            onChange={(e, value) => this.changeInState('firstName', value)}
                        />
                    </Col>
                    <Col s={12} m={6} l={4}>
                        <Input
                            s={12}
                            label="Middle Name"
                            value={this.state.middleName}
                            onChange={(e, value) => this.changeInState('middleName', value)}
                        />
                    </Col>
                    <Col s={12} m={6} l={4}>
                        <Input
                            s={12}
                            label="Last Name"
                            value={this.state.lastName}
                            onChange={(e, value) => this.changeInState('lastName', value)}
                        />
                    </Col>
                    <Col s={12} m={6} l={6}>
                        <Input
                            s={12}
                            label="Telephone"
                            type="tel"
                            value={this.state.telephone}
                            onChange={(e, value) => this.changeInState('telephone', value)}
                        />
                    </Col>
                    <Col s={12} m={6} l={6}>
                        <Input
                            s={12}
                            label="Mobile"
                            type="tel"
                            value={this.state.mobile}
                            onChange={(e, value) => this.changeInState('mobile', value)}
                        ><Icon>phone</Icon></Input>
                    </Col>
                    <Col s={12} m={6} l={6}>
                        <Input name='gender' type='radio' value={this.state.gender === 'M'} label='Male' onChange={(e, value) => this.changeInState('gender', 'M')} />
                        <Input name='gender' type='radio' value={this.state.gender === 'F'} label='Female' onChange={(e, value) => this.changeInState('gender', 'F')} />
                    </Col>
                    <Col s={12} m={6} l={6}>
                        <Input
                            s={12}
                            label="Date Of Birth"
                            type="date"
                            value={this.state.dob}
                            onChange={(e, value) => this.changeInState('dob', value)}
                        />
                    </Col>
                    <Col s={12} m={6} l={4}>
                        <Input
                            s={12}
                            label="Age"
                            type="number"
                            value={this.state.age}
                            onChange={(e, value) => this.changeInState('age', value)}
                        />
                    </Col>
                    <Col s={12} m={6} l={4}>
                        <Input
                            s={12}
                            label="Age Year"
                            type="number"
                            value={this.state.ageYear}
                            onChange={(e, value) => this.changeInState('ageYear', value)}
                        />
                    </Col>
                    <Col s={12} m={9} l={9}>
                        <Input
                            s={12}
                            label="Remarks"
                            value={this.state.remarks}
                            onChange={(e, value) => this.changeInState('remarks', value)}
                        />
                    </Col>
                    <Col s={12} m={3} l={3}>
                        <Input
                            s={12}
                            label="ITREB ID"
                            type="number"
                            value={this.state.itrebID}
                            onChange={(e, value) => this.changeInState('itrebID', value)}
                        />
                    </Col>
                    <Col s={12} m={6} l={6}>
                        <Input
                            s={12}
                            label="Center ID"
                            type="number"
                            value={this.state.centerID}
                            onChange={(e, value) => this.changeInState('centerID', value)}
                        />
                    </Col>
                    <Col s={12} m={6} l={6}>
                        <Input
                            s={12}
                            label="Sheet"
                            value={this.state.sheet}
                            onChange={(e, value) => this.changeInState('sheet', value)}
                        />
                    </Col>
                </Row>
                <div className="center-align">
                    <Button onClick={this.addUser}>
                        Add Participant
                    </Button>
                </div>
            </Card></div>
        )
    }
}