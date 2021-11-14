import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true},
  email: { type: String, required: true, unique: true, dropDups: true },
  password: { type: String, required: true },
  name: { type: String, required: true},
  dob: { type: String, required: false},
  gender: { type: String, required: false},
  zipCode: { type: String, required: false},
  isAdmin: { type: Boolean, required: true , default: false },
});

const userModel = mongoose.model("User", userSchema);

export default userModel;