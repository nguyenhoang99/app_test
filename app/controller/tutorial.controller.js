const db = require("../models");
const Tutorial = db.tutorials

// Create and Save a new Tutorial
exports.create = async (req, res) => {
    const tutorial = new Tutorial({
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    })
    try {
        const data = await tutorial.save()
        res.send(data)
    } catch (error) {
        res.status(500).send(error)
    }

};

// Retrieve all Tutorials from the database.
exports.findAll = async (req, res) => {
    try {
        const data = await Tutorial.find()
        res.send(data)
    } catch (error) {
        res.status(500).send(error)
    }
};

// Find a single Tutorial with an id
exports.findOne = async (req, res) => {
    const id = req.params.id
    try {
        const data = await Tutorial.findById(id)
        if (!data) {
            res.status(404).send("Not found Tutorial with id")
        }
        res.send(data)
    } catch (error) {
        res.status(500).send(error)
    }
};

// Update a Tutorial by the id in the request
exports.update = async (req, res) => {
    const id = req.params.id
    try {
        const data = await Tutorial.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        if (!data) {
            res.status(404).send("Cannot update Tutorial")
        }
        res.send(data)
    } catch (error) {
        res.status(500).send(error)
    }
};

// Delete a Tutorial with the specified id in the request
exports.delete = async (req, res) => {
    const id = req.params.id
    try {
        const data = await Tutorial.findByIdAndRemove(id)
        if (!data) {
            res.status(404).send("Cannot update Tutorial")
        }
        res.send(data)
    } catch (error) {
        res.status(500).send(error)
    }
};

// Delete all Tutorials from the database.
exports.deleteAll = async (req, res) => {
    try {
        const data = await Tutorial.deleteMany({})
        res.send("Tutorials were deleted successfully")
    } catch (error) {
        res.status(500).send(error)
    }
};

// Find all published Tutorials
exports.findAllPublished = async (req, res) => {
    try {
        const data = await Tutorial.find({ published: true })
        res.send(data)
    } catch (error) {
        res.status(500).send(error)
    }
};
