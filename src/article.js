const mongoose = require('mongoose');

const { Schema } = mongoose;

const articleSchema = new Schema({
    id: Number,
    title: String,
    tags: Array,
    author: String,
    body: String,
    post_date: String,
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
