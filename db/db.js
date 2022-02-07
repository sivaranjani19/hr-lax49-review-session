const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  _id: Number,
  Name: String,
  Image: String
})
module.exports = mongoose.model('Students', StudentSchema);