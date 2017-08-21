var mongoose=require('mongoose');

var  blogmodelschema=new mongoose.Schema({
    gameid:String,
    userid:String,
    blogimgurl :String,
    blogcontent : String,
    blogcontentcolor : String,
    lastmodified : String,
    follow : [String]
  });

mongoose.model('GameBlogDB',blogmodelschema);
