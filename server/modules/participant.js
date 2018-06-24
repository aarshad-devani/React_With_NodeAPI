const ParticipantModel = require('../models/participant');

class Participant {

    static async getAllParticipants() {
        return await ParticipantModel.getAllParticipants();
    }

    static async getParticipantDetails(ParticipantID) {
        return await ParticipantModel.getParticipantDetails(ParticipantID);
    }

    static async addParticipant(data) {
        return await ParticipantModel.addParticipant(data);
    }

    static async updateParticipant(ParticipantID, data) {
        return await ParticipantModel.updateParticipant(ParticipantID, data);
    }

    static async deleteParticipant(ParticipantID) {
        return await ParticipantModel.deleteParticipant(ParticipantID);
    }

}

module.exports = Participant