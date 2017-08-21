var mongoose=require('mongoose');

var  blogmodelschema=new mongoose.Schema({
    userid:String,
    blogimgurl :String,
    blogcontent : String,
    blogcontentcolor : String,
    lastmodified : String,
    follow : [String]
  });

mongoose.model('BlogDB',blogmodelschema);
