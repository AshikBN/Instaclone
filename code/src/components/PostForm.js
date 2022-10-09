import { useState } from "react";
import "./PostForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PostForm = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const postDetails = async (pics) => {
    setLoading(true);
    if (pics === undefined) {
      //  toast({
      //    title: "Please select an Image",
      //    status: "warning",
      //    duration: 5000,
      //    isClosable: true,
      //    position: "bottom",
      //  });
      console.log("picture undefined");
      setLoading(false);
      return;
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "dl2lqfxv6");
      const imgdata = await fetch(
        "https://api.cloudinary.com/v1_1/dl2lqfxv6/image/upload",
        {
          method: "post",
          body: data,
        }
      )
        .then((res) => res.json())

        .catch((err) => {
          console.log(err);
          setLoading(false);
        });

      setImage(imgdata.url.toString());
      console.log(image);
    } else {
      //  toast({
      //    title: "Please select an Image",
      //    status: "warning",
      //    duration: 5000,
      //    isClosable: true,
      //    position: "bottom",
      //  });
      console.log("please select image");
      setLoading(false);
      return;
    }
  };

  const postData = async (e) => {
    const { data } = await axios.post("/putPost", {
      name,
      location,
      likes: 0,
      description,
      image,
    });

    navigate("/postview", { replace: true });
  };
  return (
    <div>
      <div className="post-form">
        <div className="form1">
          <input
            type={"file"}
            onChange={(e) => {
              postDetails(e.target.files[0]);
            }}
            placeholder="Browse"
          />
          <br />
          <br />
          <input
            type={"text"}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Author"
          />
          <input
            type={"text"}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            placeholder="Location"
          />
          <br />
          <br />
          <input
            type={"text"}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="description"
          />
          <br />
          <br />
          <button onClick={postData}>Post</button>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
