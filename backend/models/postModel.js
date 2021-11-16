import mongoose from 'mongoose';


const postSchema = new mongoose.Schema({
    title: { type: String, required: false},
    image: { type: String, required: false},
    category: { type: String, required: false},
    description: { type: String, required: false},
    upvotes: { type: Number, default: 0, required: false},
    downvotes: { type: Number, default: 0, required: false}
});

const postModel = mongoose.model('Post', postSchema);

export default postModel;
