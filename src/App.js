import React, { useState,useEffect } from "react";
import ToDoList from "./ToDoList";
import "./App.css";

function App() {
  const ALL_ITEMS = localStorage.getItem("itemList")? JSON.parse(localStorage.getItem("itemList")) : [];
  const [items, setItems] = useState("");
  const [itemList, setItemList] = useState(ALL_ITEMS);
  const addItem = (e) => {
    e.preventDefault();
    setItemList((prevItem) => {
      return [...prevItem, items];
    });
    setItems("");
  };
  useEffect(() => {
    localStorage.setItem("itemList", JSON.stringify(itemList));
  },[addItem]);

    const deleteItem = (e) => {
        const todolist = [...itemList];
        const itemIndex = todolist.indexOf(e);
        todolist.splice(itemIndex, 1);
        setItemList(todolist);
        localStorage.setItem("itemList", JSON.stringify(todolist));
      }
      

  return (
    <div className="App">
      <div className="center-div">
        <h1>ToDo List</h1>
        <form>
          <input
            type="text"
            value={items}
            onChange={(e) => {
              setItems(e.target.value);
            }}
            placeholder="Add item"
            autoComplete="off"
            name="todo-item"
          />
          <button type="submit" className="btn-submit" onClick={addItem}>
            +
          </button>
        </form>
        <ol>
          {itemList.map((val, index) => {
            return <ToDoList key={index} item={index} list={val} onclick={deleteItem} />;
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
