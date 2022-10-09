import "./PostHeader.css";
const PostHeader = ({ data }) => {
  return (
    <div className="PostHeader">
      <div className="PostUserInfo">
        <p className="UserName">{data.name}</p>
        <p className="UserLocation">{data.location}</p>
      </div>
      <div className="postEditBtn">
        <div></div>

        <div></div>

        <div></div>
      </div>
    </div>
  );
};

export default PostHeader;
