import React, { useState } from "react";

const AddCategory = ( {onNewCategory}) => {
  const [inputValue, setInputValue] = useState("One Punch Man");

  const onInputChange = (event) => {
    //console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const onSubmit = (event) =>{
    event.preventDefault();
    //console.log(inputValue);
    if( inputValue.trim().length <=1) return;
    //setCategories( categories => [ inputValue, ...categories] );
    onNewCategory(inputValue.trim());
    setInputValue("");
  }

  return (
    <form onSubmit={ (event) => onSubmit(event)}>
      <input
        className="form-control"
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

export {AddCategory};
