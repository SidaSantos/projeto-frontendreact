import React, { useState } from "react";
import { getItem, setItem } from "../Serviços/LocalStoragefuncs";
import { BsCartDashFill } from "react-icons/bs";
import {ProductsArea } from '../css/style'



export const Cart = () => {
  const [data, setData] = useState(getItem("carrinhoYt") || []);

  const removeItem = (objeto) => {
    const arraFilter = data.filter((e) => e.id !== objeto.id);
    setData(arraFilter);
    setItem("carrinhoYt", arraFilter)};

    const subTotal = data.reduce((acc, cur) => acc + cur.price ,0)
    return (
    <div>
      <h3>{`SubTotal: R$ ${subTotal}`}</h3>
      <ProductsArea>
        {data.map((e) => (
          <div key={e.id}>
            <h4>{e.title}</h4>
            <img src={e.thumbnail} alt={e.title} />
            <h4>{`R$ ${e.price}`}</h4>
            <button onClick={() => removeItem(e)}>
              <BsCartDashFill />
            </button>
          </div>
        ))}
      </ProductsArea>
    </div>
  );
};
