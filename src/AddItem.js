import React from "react";

export default function AddItem(props) {
  return (
    <form>
      <div>
        <label htmlFor="input-name" class="ml-4 ">Название товара: </label>
        <input
          id="input-name"
          type="text"
          placeholder="Название товара"
          class="mx-1 px-3  py-2.5 rounded border-2 border-solid border-gray text-base"
          value={props.name}
          onChange={(e) => props.onSetName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="input-desc" class="ml-4">Описание товара: </label>
        <input
          id="input-desc"
          type="text"
          placeholder="Описание товара"
          class="px-3  py-2.5 rounded border-2 border-solid border-gray text-base"
          value={props.desc}
          onChange={(e) => props.onSetDesc(e.target.value)}
        />
      </div>
      <div className="form-footer">
        <div className="validation"></div>
        {(props.name === "" || props.desc === "") && (
          <p class="my-6 ml-4">Заполнены не все поля</p>
        )}
        <input
          type="submit"
          class="my-4 min-w-fit ml-4 text-base rounded  shadow-xl cursor-pointer 
          transition-opacity ease-out bg-blue-500 text-white border-0 
          pl-2 pr-5 hover:opacity-80 active: shadow active:translate-y-px 
          disabled:cursor-not-allowed disabled:opacity-40"
          value="Добавить"
          disabled={(props.name === "") | (props.desc === "")}
          onClick={props.onAddClick}
        />
      </div>
    </form>
  );
}
