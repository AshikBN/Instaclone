const express = require("express");
const app = express();
const asychHandler = require("express-async-handler");
const path = require("path");

const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Post = require("./models/Post");
dotenv.config();
connectDB();

app.use(express.json());

app.get(
  "/getPosts",
  asychHandler(async (req, res) => {
    const posts = await Post.find({});

    res.status(200).json(posts);
  })
);
app.post(
  "/putPost",
  asychHandler(async (req, res) => {
    const { name, location, likes, description, image } = req.body;

    const post = await Post.create({
      name,
      location,
      likes,
      description,
      image,
    });
    res.status(200).json({
      name: post.name,
      location: post.location,
      likes: post.likes,
      description: post.description,
      image: post.image,
    });
  })
);

// ----------------------------------------
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("code/build"));

  // app.use("*", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "code", "build", "index.html"));
  // });
} else {
  console.log("in dev");
}

app.listen(process.env.PORT || 6000, () => {
  console.log(`backend server started at port 6000`);
});
