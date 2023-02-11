import React from "react";
import { Switch, Route } from "react-router-dom";
import { Store } from "./Páginas/Store";
import { Cart } from "./Páginas/Cart";
import { Login } from "./Serviços/Login";
import { Profile } from "./Páginas/Profile";
import { ProfileEdit } from "./Páginas/ProfileEdit";


export const Content = () => {
  return (
    <Switch>
      <Route path="/profile/edit" component={ProfileEdit} />
      <Route path="/profile" component={Profile} />
      <Route path="/cart" component={Cart} />
      <Route path="/store" component={Store} />
      <Route path="/" component={Login} />
    </Switch>
  );
};
