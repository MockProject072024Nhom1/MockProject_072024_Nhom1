const mongoose=require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: { type: String, required: true }
  });
  
const User = mongoose.model('user', userSchema);
module.exports=User

  