const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    id: Number,
    title: String,
    author: String,
    tags: Array,
    date: String,
    rating: Number,
},
{ collection: "articles" }
);

const articleList = mongoose.model('articles', articleSchema);

module.exports = {articleList}