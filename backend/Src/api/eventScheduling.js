const express = require('express');
const router = express.Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const EventSchedulingScheme = require("../modal/eventScheduling")

router.post("/create", upload.single("file"), async (req, res) => {
    let fileName = req.body.fileName
    let folder = "Events"
    console.log(req.file.path, "fileh")
    console.log(req.file.originalname, "filepath")
    try {
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, { resource_type: "auto", public_id: fileName, folder: folder });
        console.log(result)

        // Create new Event
        let eventSchedulingScheme = new EventSchedulingScheme({
            name: req.body.name,
            date: req.body.date,
            avatar: result.secure_url,
            cloudinary_id: result.public_id,
            time: req.body.time,
            description: req.body.description
        });
        // Save Event
        await eventSchedulingScheme.save()
            .then(() => res.json(eventSchedulingScheme))
            .catch(err => res.status(400).json('Error: ' + err));
    } catch (err) {
        console.log(err);
    }
});

router.get("/viewevents", async (req, res) => {
    console.log("first")
    
    try{
        await EventSchedulingScheme.find()
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
        }catch (err) {
            console.log(err);
          }
                 
});    

module.exports = router;