import React from "react";
import "./List.css";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../../redux/actions/ExpenseActions";

const List = ({ list, deleteSuccess }) => {
  const time = moment(list.createdAt).fromNow();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteExpense(list));
    deleteSuccess();
  };
  return (
    <div
      className="list"
      style={{ borderRight: `5px solid ${list.category.color}` }}
    >
      <div className="list-img-container">
        <img
          src={list.category.icon}
          alt={list.category.title}
          className="list-img"
        />
      </div>
      <div className="list-info">
        <label className="list-title">{list.title}</label>
        <label className="list-time">{time}</label>
      </div>
      <div className="list-right">
        <label className="list-amount">₹ {list.amount}</label>
        <div className="delete-icon">
          <i className="bi bi-trash-fill" onClick={handleDelete}></i>
        </div>
      </div>
    </div>
  );
};

export default List;
