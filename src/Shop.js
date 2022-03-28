import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import ItemsList from "./ItemsList.js";
import AddItem from "./AddItem";

export default function Shop() {
  const [items, setItems] = useState(() => {
    const value = JSON.parse(localStorage.getItem("items"));
    if (!value) {
      return [];
    } else {
      return value;
    }
  });
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  useEffect(() => {});
  function handleAddClick(event) {
    event.preventDefault();
    setItems([...items, { name, desc, id: uuid() }]);
    setName("");
    setDesc("");
  }

  useEffect(() => {
    if (!items.length) {
      document.title = `Товары отсутствуют`;
    } else {
      document.title = `${items.length} товаров `;
    }
  });

  function handleDeleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <>
    <AddItem
        name={name}
        desc={desc}
        onSetName={setName}
        onSetDesc={setDesc}
        onAddClick={handleAddClick}
    />
      
      <div>{items.length === 0 && <p class="mx-4"> Добавьте первый товар</p>}</div>
    <ItemsList
        onDeleteItem={handleDeleteItem}
        onSetItems={setItems}
        items={items}
    />
    </>
  );
}
