import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getItem } from "../Serviços/LocalStoragefuncs";

const HeaderArea = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  background-color: violet;
  padding: 20px;
  margin-top: none;

  a {
    text-decoration: none;
    color: white;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Header = () => {
  const user = getItem("usuario");
  const name = user.name.split("");
  return (
    <HeaderArea>
      <Link to="/">Store</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/profile">My Profile</Link>
    </HeaderArea>
  );
};
