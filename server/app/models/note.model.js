const mongoose = require('mongoose');

// const NoteSchema = mongoose.Schema({
//     title: String,
//     content: String
// }, {
//     timestamps: true
// });


const NoteSchema = mongoose.Schema({
    urlName: String,
    environment: String,
    status:String
}, {
    timestamps: true
});

module.exports = mongoose.model('users', NoteSchema);