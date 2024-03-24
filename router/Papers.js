const Paper = require("../model/Paper");
const router = require("express").Router();


//create a paper
router.post("/create", async (req, res) => {
    const newPaper = new Paper(req.body);
    try {
        const savedPaper = await newPaper.save();
        res.status(200).json(savedPaper);
    } catch (err) {
        res.status(500).json(err);
    }
});


//get all papers
router.get("/list", async (req, res) => { // change this as "/paperList"
    try {
        const paper = await Paper.find();
        res.status(200).json(paper);
    } catch (err) {
        res.status(500).json(err);
    }
});

//get a paper
router.get("/:id/paper", async (req, res) => {
    try {
        const paper = await Paper.findById(req.params.id);
        res.status(200).json(paper);
    } catch (err) {
        res.status(500).json(err);
    }
});

//update paper
router.put("/:id/live", async (req, res) => {
    if (req.body.paperId === req.params.id) {
        try {
            await Paper.findByIdAndUpdate(req.params.id, {$set: req.body});
            res.status(200).json("paper updated");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("paper not found");
    }
});

//delete paper
router.delete("/:id/delete", async (req, res) => {
    try {
        await Paper.findByIdAndDelete(req.params.id);
        res.status(200).json("Paper deleted");
    } catch (err) {
        return res.status(500).json(err);
    }
});

module.exports = router;
