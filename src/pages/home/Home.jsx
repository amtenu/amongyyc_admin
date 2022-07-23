import React from "react";
import SideBar from "../../component/sidebar/SideBar";
import NavBar from "../../component/navbar/NavBar";
import "./home.scss";
import { Table } from "@mui/material";

const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <NavBar />
       <div className='listContainer'>
        <div className='listTitle' > Latest </div>
        <Table/>
        </div>
        </div>
    </div>
  );
};

export default Home;
