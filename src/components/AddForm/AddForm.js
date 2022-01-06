import React, { useEffect, useState } from "react";
import "./AddForm.css";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { categories } from "../../constants/ExpenseCategory";
import { addExpense } from "../../redux/actions/ExpenseActions";
import CategoryList from "./CategoryList";

const AddForm = () => {
  const cat = categories;
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const dispatch = useDispatch();

  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount("");
      return;
    }
    setAmount(val);
  };

  const handleCategory = (category) => {
    setCategory(category);
    setIsCategoryOpen(false);
  };

  const handleSubmit = () => {
    if (title === "" || amount === "" || !category) {
      const notify = () => toast.error("Please enter valid data");
      notify();
      return;
    }
    const data = {
      title,
      amount,
      category,
      createdAt: new Date(),
    };
    dispatch(addExpense(data));
    console.log(data);
    const notify = () => toast.success("Expense added successfully!");
    notify();
  };

  return (
    <div className="add-form">
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <div className="form-item">
        <label htmlFor="">Title</label>
        <input
          type="text"
          placeholder="Enter a name to your expenditure"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-item">
        <label htmlFor="">Amount ₹</label>
        <input
          type="text"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => handleAmount(e)}
        />
      </div>

      <CategoryList
        cat={cat}
        category={category}
        isCategoryOpen={isCategoryOpen}
        setIsCategoryOpen={setIsCategoryOpen}
        handleCategory={handleCategory}
      />
      <div className="add-form-btn" onClick={handleSubmit}>
        <div>
          <label htmlFor="">Add</label>
          <i className="bi bi-plus"></i>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
