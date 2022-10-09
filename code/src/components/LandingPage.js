import { useNavigate } from "react-router-dom";
import "./landingPage.css";
import LondingImg from "../imgs/landingImg.png";

export default function LandingPage() {
  const nav = useNavigate();
  const gotopost = () => {
    nav("/postview");
  };
  return (
    <>
      <div id="main">
        <img id="leftside" src={LondingImg} alt="avtaar"></img>

        <div id="rigthside">
          <h1>10x Team 04</h1>
          <button id="button1" onClick={gotopost}>
            <b>Enter</b>
          </button>
        </div>
      </div>
    </>
  );
}
