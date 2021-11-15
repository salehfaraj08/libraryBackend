const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
bodyParser.urlencoded({ extended: false });
app.use(cors());
app.use(bodyParser.json());
app.use('/api/library', require('./routes/library.route'));

mongoose.connect('mongodb+srv://saleh:saleh0811@cluster0.whijz.mongodb.net/libraryDb?retryWrites=true&w=majority', { useNewUrlParser: true },()=>{
    console.log('connected to db');
});

app.listen(process.env.PORT || 5001,()=>{
    console.log('listening on server 5001');
});
