const express = require('express');
const libraryController = require('../controllers/library.controller');
const router = express.Router();

router.get('/api/library', (req, res) => {
    libraryController.getAllBooks(req, res);
}).post('/api/library', (req, res) => {
    libraryController.createBook(req, res);
}).get('/api/library/:year', (req, res) => {
    libraryController.getBookByYear(req, res);
}).delete('/api/library/:deleteId', (req, res) => {
    libraryController.deleteBook(req, res);
}).put('/api/library/:updateId', (req, res) => {
    libraryController.updateBook(req, res);
});

module.exports = router;