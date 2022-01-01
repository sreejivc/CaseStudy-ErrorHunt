const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/Library');
mongoose.connect('mongodb+srv://sreeji:sreeji@cluster0.galbd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useCreateIndex:true,
    useNewUrlParser:true//Part #2 Point 10
    
});
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;