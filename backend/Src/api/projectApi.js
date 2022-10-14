const express = require('express')
const router = express.Router()
const ProjectController = require('../controller/projectController');

module.exports = function () {
    router.post('/add', ProjectController.addProjects);
    router.get('/', ProjectController.readProjects);
    router.put('/update/:id', ProjectController.updateProjects)
    router.delete('/delete/:id', ProjectController.deleteProjects)
    router.get('/:id', ProjectController.findProjectByID)
    router.post('/search',ProjectController.search)
    return router;
}