import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { searchExpense } from "../../redux/actions/ExpenseActions";
import Modal from "../Modal/Modal";
import "./Topbar.css";

const Topbar = () => {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const expense = useSelector((state) => state.expense);
  console.log(expense);
  const dispatch = useDispatch();

  useEffect(() => {
    if (expense) {
      setTimeout(() => {
        setShowModal(false);
      }, 1000);
    }
  }, [expense]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    dispatch(searchExpense(e.target.value));
  };

  return (
    <div className="topbar-container">
      <div className="topbar space-bw-div">
        <div className="searchbar center-div">
          <i className="bi bi-search center-div"></i>
          <input type="text" value={search} onChange={(e) => handleSearch(e)} />
        </div>
        <div className="add-btn" onClick={openModal}>
          <i className="bi bi-plus-circle"></i>
          <label htmlFor="">Add</label>
        </div>
      </div>

      {showModal && (
        <Modal closeModal={closeModal} setShowModal={setShowModal} />
      )}
    </div>
  );
};

export default Topbar;
