import React, { useState } from "react";
import { setItem } from "./LocalStoragefuncs";

export const Login = (props) => {
  const [name, setName] = useState("");
  const [Pass, setPass] = useState("");
  
  const cond  = (name.length > 3 && Pass.length > 5)

const saveUser = (name, Pass)  => {
setItem('usuario', {name,Pass })
const { history: {push} } = props;
push('/store')
}
  return (
    <div>
      <p>Name</p>
      <input
        type="text"
        onChange={({ target: { value } }) => setName(value)}
        value={name}
      />
      <p>password</p>
      <input
        type="password"
        onChange={({ target: { value } }) => setPass(value)}
        value={Pass}
      />
      <br /> <br />
      <button
      type="button"
      onClick={ () => saveUser(name, Pass)}
      disabled={ !cond }
      >
       Sing In
      </button>
    </div>
  );
};
