import React from "react";
import "./Home.css";
import ExpenseList from "../../components/ExpenseList/ExpenseList";
import Topbar from "../../components/TopBar/Topbar";

const Home = () => {
  return (
    <div className="home-container">
      <Topbar />
      <ExpenseList />
    </div>
  );
};

export default Home;
