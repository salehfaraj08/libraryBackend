const express = require('express');
const libraryController = require('../controllers/library.controller');
const router = express.Router();

router.get('/', (req, res) => {
    libraryController.getAllBooks(req, res);
}).post('/', (req, res) => {
    libraryController.createBook(req, res);
}).get('/:year', (req, res) => {
    libraryController.getBookByYear(req, res);
}).delete('/:deleteId', (req, res) => {
    libraryController.deleteBook(req, res);
}).put('/:updateId', (req, res) => {
    libraryController.updateBook(req, res);
});

module.exports = router;