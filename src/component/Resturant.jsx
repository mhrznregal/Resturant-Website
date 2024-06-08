import React, { useState } from "react";
import "./style.css";
import Menu from "./menuapi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((item) => {
      return item.category;
    })
  ),
  "All",
];
console.log(uniqueList);

function Resturant() {
  const [menuData, setMenuData] = useState(Menu);
  const [menulist, setmenulist] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedItem = Menu.filter((item) => {
      return item.category === category;
    });
    setMenuData(updatedItem);
  };
  return (
    <>
      <Navbar filterItem={filterItem} menulist={menulist} />
      <MenuCard menuData={menuData} />
    </>
  );
}

export default Resturant;
