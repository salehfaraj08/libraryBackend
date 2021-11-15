const bookModel = require('../models/library.model').book;

const getAllBooks = async (req, res) => {
    const data = await bookModel.find({});
    return res.status(200).send(data);
}
const createBook = (req, res) => {
    const { bookName, publisherName, publisherYear, bookLanguage, rating } = req.body;
    const book = new bookModel({
        bookName,
        publisherName,
        publisherYear,
        bookLanguage,
        rating
    });
    book.save((err, data) => {
        if (err) return res.status(404).send(err.message);
        return res.status(200).send(data);
    });
}

const getBookByYear = (req, res) => {
    const { year } = req.params;
    bookModel.find({ publisherYear: { $eq: year } }, (err, data) => {
        if (err)
            throw err;
        if (data && data.length > 0)
            return res.status(200).send(data);
        return res.status(404).send({ error: 'there is no book published on this year' });
    });
}

const deleteBook = (req, res) => {
    const { deleteId } = req.params;
    console.log(deleteId);
    bookModel.findByIdAndDelete(deleteId, (err, data) => {
        if (err)
            return res.status(200).json({ error: 'these book is not exist' })
        if (data)
            return res.status(200).send(data);
    });
}

const updateBook = (req, res) => {
    console.log('update');
    const { updateId } = req.params;
    const { bookName, publisherName, publisherYear, bookLanguage, rating } = req.body;
    const book = {
        bookName,
        publisherName,
        publisherYear,
        bookLanguage,
        rating
    };
    bookModel.findByIdAndUpdate(updateId, book, { new: true, runValidators: true }, (err, data) => {
        if (err) return res.status(404).send(err.message);
        return res.status(200).send(data);
    });
}

module.exports = {
    getAllBooks,
    createBook,
    getBookByYear,
    deleteBook,
    updateBook
}