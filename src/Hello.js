import React, { Component } from "react";
import "./hello.css";
import "tachyons";

const Hello = (props) => {
  return (
    <div classname="f1">
      <h1 className="tc">Hello Freaking World!!!</h1>
      <p className="tc">
        Welcome to <strong>React</strong>, aeeeee!!!
      </p>
      <p className="tc">{props.greetings}</p>
    </div>
  );
};

export default Hello;
