import React from "react";

function Navbar({ filterItem, menulist }) {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menulist.map((item) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(item)}
              >
                {item}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
