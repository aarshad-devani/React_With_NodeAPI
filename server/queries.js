module.exports={
    addUser: "INSERT INTO [user] (Name,Email,Password) VALUES (---Name---,---Email---,---Password---)",
    updateUser: "UPDATE [user] SET Name='---Name---',Email='---Email---' WHERE Id=---id----",
    deleteUser: "DELETE FROM [user] WHERE Id=---id---"
}