import { useEffect, useState } from "react";
import "./PostView.css";
import img1 from "../imgs/icon.svg";
import camera from "../imgs/camera.png";
import dot from "../imgs/edit.svg";
import { useNavigate } from "react-router-dom";
import Posts from "./Posts";

import axios from "axios";

export default function PostView() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const gotoForm = () => {
    navigate("/form");
  };
  const getData = async () => {
    const { data } = await axios.get("/getPosts");
    setUsers(data);
  };

  useEffect(() => {
    const getData1 = async () => {
      await getData();
    };
    getData1();
  }, []);
  return (
    <>
      <header>
        <div style={{ display: "flex" }}>
          <img className="logo" src={img1} alt="img"></img>
          <p className="LogoName">Instaclone</p>
        </div>

        <img
          id="cam"
          className="camera"
          src={camera}
          alt="avtaar"
          onClick={gotoForm}
          style={{ cursor: "pointer" }}
        ></img>
      </header>
      <div className="site-container">
        {/* <div className="Posts"> */}
        {users.map((data, index) => {
          console.log(data);
          return <Posts key={index} data={data} />;
        })}
        {/* </div> */}
      </div>
    </>
  );
}
//   const nav = useNavigate();
//   const gotoform = () => {
//     nav("/form");
//   };

//   const [users, Setusers] = useState([]);

//   const getUsers = async () => {
//     const response = await fetch("http://localhost:8080/post");
//     Setusers(await response.json());
//   };
//   useEffect(() => {
//     getUsers();
//     console.log(getUsers());
//   }, []);
