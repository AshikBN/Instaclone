import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import PostView from "./PostView";
import PostForm from "./PostForm";

// import Daa from "./postview";

// import Addpost from "./form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/postview" element={<PostView />} />
        <Route path="/form" element={<PostForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
