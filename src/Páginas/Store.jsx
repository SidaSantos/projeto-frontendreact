import React, { useEffect, useState } from "react";
import { BsFillCartCheckFill, BsFillCartPlusFill } from "react-icons/bs";
import { getItem, setItem } from "../Serviços/LocalStoragefuncs";
import { ProductsArea } from "../css/style";

export const Store = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState(getItem("carrinhoYt") || []);

  useEffect(() => {
    const fetchApi = async () => {
      const url = "https://api.mercadolibre.com/sites/MLB/search?q=celul";
      const response = await fetch(url);
      const objJson = await response.json();
      setData(objJson.results);
    };

    fetchApi();
  }, []);

  const handleClick = (objeto) => {
    const element = cart.find((e) => e.id === objeto.id);
    if (element) {
      const arrFilter = cart.filter((e) => e.id !== objeto.id);
      setCart(arrFilter);
      setItem("carrinhoYt", arrFilter);
    } else {
      setCart([...cart, objeto]);
      setItem("carrinhoYt", [...cart, objeto]);
    }
  };

  return (
    <div>
      <ProductsArea>
        {data.map((e) => (
          <div key={e.id}>
            <h4>{e.title}</h4>
            <img src={e.thumbnail} alt="" />
            <h4>{`R$ ${e.price}`}</h4>
            <button onClick={() => handleClick(e)}>
              {cart.some((itemCart) => itemCart.id === e.id) ? (
                <BsFillCartCheckFill />
              ) : (
                <BsFillCartPlusFill />
              )}
            </button>
          </div>
        ))}
      </ProductsArea>
    </div>
  );
};
