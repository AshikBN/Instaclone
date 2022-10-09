const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    likes: { type: Number, required: true },
    description: { type: String, required: true },
    image: {
      type: String,
      default:
        "https://plus.unsplash.com/premium_photo-1661342567521-e42e1926807a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
