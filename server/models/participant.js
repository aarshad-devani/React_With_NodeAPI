const mssql = require('../db/mssql')

class Participant {

    static constructor() {
        this.table = 'MParticipant';
    }


    static async getAllParticipants() {
        return await mssql.select().from(this.table);
    }

    static async getParticipantDetails(ParticipantID) {
        return await mssql
        .select()
        .from(this.table)
        .where({
            ParticipantID: ParticipantID
        });
    }

    static async addParticipant(data) {
        return await mssql(this.table)
        .insert({
            FirstName: data.FirstName,
            MiddleName: data.MiddleName,
            LastName: data.LastName,
            Telephone: data.Telephone,
            Mobile: data.Mobile,
            Email: data.Email,
            Gender: data.Gender,
            DateOfBirth: data.DateOfBirth,
            Remarks: data.Remarks,
            CenterId: data.CenterId,
            sheet: data.sheet,
            age: data.age,
            ageYear: data.ageYear,
            CreatedOn: data.CreatedOn,
            ModifiedOn: data.ModifiedOn,
            ITREBID: data.ITREBID
        });
    }

    static async updateParticipant(ParticipantID, data) {
        return await mssql(this.table)
        .where(
            'ParticipantID',
            ParticipantID
        )
        .update({
            FirstName: data.FirstName,
            MiddleName: data.MiddleName,
            LastName: data.LastName,
            Telephone: data.Telephone,
            Mobile: data.Mobile,
            Email: data.Email,
            Gender: data.Gender,
            DateOfBirth: data.DateOfBirth,
            Remarks: data.Remarks,
            CenterId: data.CenterId,
            sheet: data.sheet,
            age: data.age,
            ageYear: data.ageYear,
            CreatedOn: data.CreatedOn,
            ModifiedOn: data.ModifiedOn,
            ITREBID: data.ITREBID
        });
    }

    static async deleteParticipant(ParticipantID) {
        return await mssql(this.table)
        .where('ParticipantID', ParticipantID)
        .del();
    }

}

module.exports = Participant