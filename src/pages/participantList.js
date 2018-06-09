import React, { Component } from 'react';
import { GetAllParticipants } from '../api/participant_api';

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
            <div>All Participants</div>
        )
    }
}