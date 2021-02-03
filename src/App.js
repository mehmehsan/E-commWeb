import React, { useState } from "react";
import { ReactComponent as Img } from "./shopping-cart.svg";
import "./styles.css";

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

      <nav>
        <ul id="navigation">
          <li> All </li>
          <li className="navigationPills"> Clothes </li>
          <li className="navigationPills"> Electronics </li>
          <li className="navigationPills"> Books </li>
          <li className="navigationPills"> Baby </li>
          <li className="navigationPills">Watches </li>
          <li className="navigationPills"> Today's Deals</li>
          <li className="dropdownIcon"> &#9776; </li>
        </ul>
      </nav>
    </div>
  );
}
