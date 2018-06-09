import React, { Component } from 'react';
import { GetAllParticipants } from '../api/participant_api';
import { Table } from 'react-materialize';

export default class ParticipantList extends Component {
    state = {
        participantsList: []
    }

    componentWillMount() {
        GetAllParticipants().then(data => {
            console.log('allparticipants', data);
            debugger;
            this.setState({ participantsList: data });
        })
    }
    render() {
        return (
            <div>
                <h2>All Participants</h2>
                <Table>
                    <thead>
                        <tr>
                            <th data-field="id">Name</th>
                            <th data-field="name">Age</th>
                            <th data-field="price">Mobile</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.participantsList.map((particpant, index) => {
                            return (
                                <tr key={index}>
                                    <td>{`${particpant.firstName} ${particpant.middleName} ${particpant.lastName}`}</td>
                                    <td>{particpant.age}</td>
                                    <td>{particpant.mobile}</td>
                                </tr>
                            );
                        })}

                    </tbody>
                </Table>
            </div>
        )
    }
}