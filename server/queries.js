module.exports={
    getAllParticipants: "Select * from [dbo].[MParticipant]",
    getParticipantDetails: "SELECT * from [dbo].[MParticipant]  where ParticipantID={{{id}}}",
    addParticipant: "INSERT INTO [dbo].[MParticipant] (FirstName,MiddleName,LastName,Telephone,Mobile,Email,Gender,DateOfBirth,Remarks,CenterId,sheet,age,ageYear,CreatedOn,ModifiedOn,ITREBID) VALUES ('{{{firstName}}}','{{{middleName}}}','{{{lastName}}}','{{{telephone}}}','{{{mobile}}}','{{{email}}}','{{{gender}}}','{{{dob}}}','{{{remarks}}}',{{{centerID}}},'{{{sheet}}}',{{{age}}},{{{ageYear}}},'{{{createdOn}}}','{{{modifiedOn}}}',{{{itrebID}}})",
    updateParticipant: "UPDATE [dbo].[MParticipant] SET FirstName={{{firstName}}},MiddleName={{{middleName}}},LastName={{{lastName}}},Telephone={{{telephone}}},Mobile={{{mobile}}},Email={{{email}}},Gender={{{gender}}},DateOfBirth={{{dob}}},Remarks={{{remarks}}},CenterId={{{centerID}}},sheet={{{sheet}}},age={{{age}}},ageYear={{{ageYear}}},ModifiedOn={{{modifiedOn}}},ITREBID={{{itrebID}}} WHERE ParticipantID={{{ParticipantID}}}",
    deleteParticipant: "DELETE FROM [dbo].[MParticipant] WHERE ParticipantID={{{id}}}"

}