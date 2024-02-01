import React, { useState } from "react";

function Item({ name, category }) {
  const [updateCart, setUpdateCart] = useState(false)
  function cartUpdater(){
    setUpdateCart((updateCart) => !updateCart)
  }

const cartClass = updateCart ? "in-cart" : ""  
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={cartUpdater}>{updateCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
