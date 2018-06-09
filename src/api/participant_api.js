import axios from 'axios';
import { apiEndpoint } from '../constants';

function ConvertIntoParticipantModel(data) {
    return {
        ParticipantID: data.ParticipantID,
        firstName: data.FirstName,
        middleName: data.MiddleName,
        lastName: data.LastName,
        telephone: data.telephone,
        mobile: data.Mobile,
        email: data.Email,
        gender: data.Gender,
        dob: data.DateOfBirth,
        remarks: data.Remarks,
        centerID: data.CenterId,
        sheet: data.sheet,
        age: data.age,
        ageYear: data.ageYear,
        createdOn: data.CreatedOn,
        modifiedOn: data.ModifiedOn,
        itrebID: data.ITREBID
    }
}

export function AddPraticipant(participantObject) {
    return new Promise((resolve, reject) => {
        axios.post(`${apiEndpoint}/api/participant/add`, participantObject).then(receivedData => resolve(receivedData.data)).catch(err => reject(err));
    });
}

export function updatePraticipant(participantObject) {
    return new Promise((resolve, reject) => {
        axios.put(`${apiEndpoint}/api/participant/update/${participantObject.ParticipantID}`, participantObject).then(receivedData => resolve(receivedData.data)).catch(err => reject(err));
    });
}

export function GetAllParticipants() {
    return new Promise((resolve, reject) => {
        axios.get(`${apiEndpoint}/api/participant/all`).then(receivedData => {
            let finalArray = [];
            receivedData.data.recordset.forEach(user => {
                finalArray.push(ConvertIntoParticipantModel(user));
            });
            resolve(finalArray);
        }).catch(err => reject(err));
    });
}

export function DeleteParticipant(participantObject) {
    return new Promise((resolve, reject) => {
        axios.delete(`${apiEndpoint}/api/participant/delete/${participantObject.ParticipantID}`).then(receivedData => resolve(receivedData.data)).catch(err => reject(err));
    });
}

export function GetParticipantDetails(id) {
    return new Promise((resolve, reject) => {
        axios.get(`${apiEndpoint}/api/participant/${id}`).then(receivedData => resolve(ConvertIntoParticipantModel(receivedData.recordset[0]))).catch(err => reject(err));
    });
}