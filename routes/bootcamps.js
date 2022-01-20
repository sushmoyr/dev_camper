const router = require('express').Router();

const controller = require('../controllers/bootcamps');
const {
    getBootcamps,
    getBootcamp,
    createBootcamp,
    updateBootcamp,
    deleteBootcamp
} = require('../controllers/bootcamps');

router
    .route('/')
    .get(getBootcamps)
    .post(createBootcamp)

router
    .route('/:id')
    .get(getBootcamp)
    .put(updateBootcamp)
    .delete(deleteBootcamp)

module.exports = router;