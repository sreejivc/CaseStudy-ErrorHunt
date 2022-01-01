const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/Library');
mongoose.connect('mongodb+srv://sreeji:sreeji@cluster0.galbd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useCreateIndex:true,
    useNewUrlParser:true//Part2 Point10
});
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;