import React, { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <div>
      <div>
        <h2 class="text-lg font-sans text-center font-bold">{info.name}</h2>
        <p class="text-lg item-desc text-center">{info.desc}</p>
      </div > 
      <div class="flex mb-12" >
        <button
          class="text-base rounded  shadow-xl cursor-pointer 
          transition-opacity ease-out bg-blue-500 text-white border-0 pl-4 pr-4
          hover:opacity-80 active:shadow active:translate-y-px disabled:cursor-not-allowed 
          disabled:opacity-40" 
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 class="text-base pl-6 pr-6">{total ? total : ""}</h3>
        <button 
        class="text-base rounded  shadow-xl cursor-pointer 
        transition-opacity ease-out bg-blue-500 text-white border-0 pl-6 pr-6
        hover:opacity-80 active:shadow active:translate-y-px disabled:cursor-not-allowed 
        disabled:opacity-40" 
        onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}
