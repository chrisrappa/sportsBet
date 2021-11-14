import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const postSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true},
    image: { type: String, required: true},
    description: { type: String, required: true},
    upVotes: {type: BigInt, required: false},
    downVotes: {type: BigInt, required: false},
    // comments: [commentSchema],
    isSubmitted: { type: Boolean, default: false },
    submittedAt: { type: Date },
  }, {
    timestamps: true
});

const postModel = mongoose.model("Post", postSchema);

export default postModel;
