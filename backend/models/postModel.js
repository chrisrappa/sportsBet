import mongoose from 'mongoose';


const postSchema = new mongoose.Schema({
    title: { type: String, required: true},
    image: { type: String, required: true},
    category: { type: String, required: true},
    description: { type: String, required: true},
    upvotes: { type: Number, default: 0, required: true},
    downvotes: { type: Number, default: 0, required: true}
});

const postModel = mongoose.model('Post', postSchema);

export default postModel;
