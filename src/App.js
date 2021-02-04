import React, { useState } from "react";
import { ReactComponent as Img } from "./shopping-cart.svg";
import "./styles.css";
const allProducts = {
  // ALL: [
  //   "MARICO : 9/10 ",
  //   "ITC : 8/10 ",
  //   "INFOSYS : 7/10 ",
  //   "DIVISLAB : 6/10 ",
  //   "RELAXO : 5/10 "
  // ],

  Fashion: ["MARICO ", "ITC "],

  Electronics: "INFOSYS",

  Books: "DIVISLAB",

  Baby: "HDFC",

  Watches: "INDRAPRASTHA GAS",

  Others: "RELAXO"
};

var setProducts = Object.keys(allProducts);

export default function App() {
  const [cart, setCart] = useState(0);
  function dropDown() {
    var x = document.getElementById("navigation");
    if (x.className === "navigation") {
      x.className += " responsive";
    } else {
      x.className = "navigation";
    }
  }

  return (
    <div className="App">
      <header className="header">
        <span id="name"> Flanbieuto</span>
        <span id="searchBar">
          <select>
            <option> All </option>
            <option> Fashion </option>
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
        <ul id="navigation" className="navigation">
          <li> All </li>
          <li className="navigationPills"> Fashion </li>
          <li className="navigationPills"> Electronics </li>
          <li className="navigationPills"> Books </li>
          <li className="navigationPills"> Baby </li>
          <li className="navigationPills">Watches </li>
          <li className="navigationPills"> Today's Deals</li>
          <li className="dropdownIcon" onClick={dropDown}>
            {" "}
            &#9776;{" "}
          </li>
        </ul>
      </nav>

      <img
        className="event"
        src=" https://m.media-amazon.com/images/G/31/img21/Fashion/Event/V_Day_Flip/AssociateCentral/2148x588_AFVDay.jpg"
        alt="loading"
      />
      <br />
      <div id="item1">
        <img
          className="watches"
          src="https://images-na.ssl-images-amazon.com/images/I/814d7DPCPfL._UL1500_.jpg"
          alt="loading"
          width="30"
          height="50"
        />
        <br />
        <button>
          {" "}
          <a href="https://amzn.to/2YKtMxq"> Shop Now </a>
        </button>
      </div>

      <div id="item2">
        <img
          className="jewellery"
          src="https://m.media-amazon.com/images/I/51viOs7ddqL._SL250_.jpg"
          alt="loading"
          width="30"
          height="50"
        />
        <br />
        <button>
          {" "}
          <a href="https://amzn.to/36DzaHi"> Shop Now </a>
        </button>
      </div>

      <div id="item3">
        <img
          className="shirts"
          src="https://images-na.ssl-images-amazon.com/images/I/61xXzmOiS4L._UL1467_.jpg"
          alt="loading"
          width="30"
          height="50"
        />
        <br />
        <button>
          {" "}
          <a href="https://amzn.to/3rcZIXE"> Shop Now </a>
        </button>
      </div>

      <div id="item4">
        <img
          className="women"
          src="https://images-na.ssl-images-amazon.com/images/I/61A7Nn85EJL._UL1500_.jpg"
          alt="loading"
          width="30"
          height="50"
        />
        <br />
        <button>
          {" "}
          <a href="https://amzn.to/39LrCE2"> Shop Now </a>
        </button>
      </div>

      <div id="item5">
        <img
          className="salwaar"
          src="https://images-na.ssl-images-amazon.com/images/I/81KgIYAiZzL._UL1500_.jpg"
          alt="loading"
          width="30"
          height="50"
        />
        <br />
        <button>
          {" "}
          <a href="https://amzn.to/3axWLdp"> Shop Now </a>
        </button>
      </div>
      <div id="item6">
        <img
          className="salwaar"
          src="https://images-na.ssl-images-amazon.com/images/I/719r0MVQ9IL._UL1500_.jpg"
          alt="loading"
          width="30"
          height="50"
        />
        <br />
        <button>
          {" "}
          <a href="https://amzn.to/3rrbVbr"> Shop Now </a>
        </button>
      </div>
    </div>
  );
}
