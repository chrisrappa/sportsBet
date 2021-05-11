import mongoose from 'mongoose';


const subSchema = new mongoose.Schema({
    subId: { type: String },
    customer: { type: String },
    items: { type: Object },
    plan: { type: Object }
  }); 

const subModel = mongoose.model("Sub", subSchema);

export default subModel;
