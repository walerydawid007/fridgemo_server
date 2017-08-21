var mongoose=require('mongoose');

var  usermodelschema=new mongoose.Schema({
    username:String,
    useremail:String,
    userphone :String,
    userpassword : String,
    useravatar:{
      type : String,
      default: 'tester'
    },
    usertoken  : {
      type : String,
      default: 'tester'
    }
  });

mongoose.model('UserDB',usermodelschema);
