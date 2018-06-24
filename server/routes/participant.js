const express = require("express");
const router = express.Router()
const participantsModule = require("../modules/participant")

router.get("/all", async function (req, res) {
    const participants = await participantsModule.getAllParticipants();
    res.send(participants);
});
router.get("/:id", async function (req, res) {
    const participant = await participantsModule.getParticipantDetails(req.params.id);
    res.send(participant);
});
router.post("/add", async function (req, res) {
    const result = await participantsModule.addParticipant(req.body);
    res.send(result);
});
router.put("/update/:id", async function (req, res) {
    const result = await participantsModule.updateParticipant(req.params.id, req.body);
    res.send(result);
});
router.delete("/delete/:id", async function (req, res){
    const result = await participantsModule.deleteParticipant(req.params.id);
    res.send(result);
});

module.exports = router