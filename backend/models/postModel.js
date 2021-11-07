import mongoose from 'mongoose';


const postItemSchema = new mongoose.Schema ({
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
});

const postSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    postItems: [orderItemSchema],
    isSubmitted: { type: Boolean, default: false },
    submittedAt: { type: Date },
  }, {
    timestamps: true
  });

const postModel = mongoose.model("Post", postSchema);

export default postModel;
