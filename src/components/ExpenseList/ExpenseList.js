import React from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "./ExpenseList.css";
import List from "./List";

const ExpenseList = () => {
  const { expenseList, query } = useSelector((state) => state.expense);
  const filteredList = expenseList.filter((item) =>
    item.title.toLowerCase().includes(query)
  );
  const updatedList = filteredList.reverse();

  const deleteSuccess = () => {
    toast.success("Expense Deleted!");
  };

  return (
    <div className="expense-container">
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <div className="expense-list">
        {updatedList.length ? (
          updatedList.map((list) => (
            <List
              key={list.createdAt}
              list={list}
              deleteSuccess={deleteSuccess}
            />
          ))
        ) : (
          <div className="empty-state">
            <img
              src={require("../../assets/images/empty.png")}
              alt="Empty Img"
              className="empty-img"
            />
            <label htmlFor="">Uh Oh! Your expense list is empty!</label>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseList;
