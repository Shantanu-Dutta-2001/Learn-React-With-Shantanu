import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";
import { useState } from "react";
import PostListProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";
function App() {
  const [selectedTab, setSeelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="main-container">
        <Sidebar
          selectedTab={selectedTab}
          setSeelectedTab={setSeelectedTab}
        ></Sidebar>
        <div className="content-container">
          <Header></Header>
          <Outlet />
          {/* {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )} */}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
