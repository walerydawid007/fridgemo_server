var mongoose=require('mongoose');

var  blogcommnetmodelschema=new mongoose.Schema({
    userid:String,
    blogid:String,
    comment :String,
    lastmodified: String
});
mongoose.model('BlogCommentDB',blogcommnetmodelschema);
