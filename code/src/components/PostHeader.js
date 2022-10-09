import "./PostHeader.css";
import edit from "../imgs/edit.svg";
const PostHeader = ({ data }) => {
  return (
    <div className="PostHeader">
      <div className="PostUserInfo">
        <p className="UserName">{data.name}</p>
        <p className="UserLocation">{data.location}</p>
      </div>
      <div className="postEditBtn">
        <img src={edit} alt="" />
      </div>
    </div>
  );
};

export default PostHeader;
