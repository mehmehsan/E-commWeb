import "./styles.css";
import React, { useState } from "react";
import { ReactComponent as Img } from "./shopping-cart.svg";

export default function App() {
  const [cart, setCart] = useState(0);

  return (
    <div className="App">
      <header className="header">
        <span id="name"> Flanbieuto</span>
        <span id="searchBar">
          <select>
            <option> All </option>
            <option> Clothes </option>
            <option> Electronics </option>
            <option> Books </option>
            <option> Baby </option>
            <option> Watches </option>
            <option> Today's Deals</option>
          </select>
        </span>
        <input type="text" />
        <input type="button" value="🔍" id="button" />

        <Img className="Img" />
        <div class="relative">
          <strong>{cart}</strong>
        </div>
      </header>
      <nav id="navigation">
        <ul id="navigationPills">
          <li> All </li>
          <li> Clothes </li>
          <li> Electronics </li>
          <li> Books </li>
          <li> Baby </li>
          <li> Watches </li>
          <li> Today's Deals</li>
        </ul>
      </nav>
    </div>
  );
}
