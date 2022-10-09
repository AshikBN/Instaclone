import "./PostImage.css";
import img from "../imgs/post1.png";
const PostImage = ({ data }) => {
  return (
    <div className="PostImage">
      <img src={data.image} alt="" />
    </div>
  );
};

export default PostImage;
