const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    publisherName: {
        type: String,
        required: true
    },
    publisherYear: {
        type: Number,
        required: true,
        min: [0, 'year cant be negative'],
        max: [new Date().getFullYear(), 'year cant be bigger than current year']
    },
    bookLanguage: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 2
    },
    rating: {
        type: Number,
        required: true,
        min: [0, 'rating cant be negative'],
        max: [5, 'rating cant be bigger than 5']
    }
});

const book = mongoose.model('books', bookSchema);

module.exports = {
    book
};