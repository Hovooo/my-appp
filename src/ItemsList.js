import React from "react";
import Item from "./Item.js";

export default function ItemList(props) {
  const itemsRender = props.items.map((item) => (
    <li key={item.id} class="border-solid border-4 bw-2 rounded-xl max-w-fit p-4 hover:border-dashed border-gray mb-20 mx-4">
      <Item info={item} />
      <button
        item={item}
        onClick={() => props.onDeleteItem(item.id)}
        class="transition ease-out duration-200 hover:scale-110 min-w-12 
        pr-4 pl-4 text-base cursor-pointer rounded border-black
        bg-white text-black shadow-xl mx-6 "
      >
        Удалить
      </button>
    </li>
  ));
  return <ul class="list-none text-center m-0 p-0">{itemsRender}</ul>;
}
