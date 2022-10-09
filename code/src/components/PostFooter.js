import "./PostFooter.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const PostFooter = ({ data }) => {
  return (
    <div className="PostFooter">
      <div className="Icons">
        <div className="likeBtn">
          <FormControlLabel
            control={
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                name="checkedH"
              />
            }
          />
        </div>
        <div>
          <img
            className="shareBtn"
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
        {/* <div className="uploadDate">{data.date}</div> */}
      </div>
      <div className="likes">{data.likes} Likes</div>
      <div className="caption">{data.description}</div>
    </div>
  );
};

export default PostFooter;
