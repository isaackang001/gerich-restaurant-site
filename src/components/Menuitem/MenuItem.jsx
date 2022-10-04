import React from "react";
import PropTypes from "prop-types";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      {/* Menu Name */}
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
      </div>

      {/* Menu Divider  */}
      <div className="app__menuitem-dash"></div>

      {/* Menu Price */}
      <div className="app__menuitem-price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>
    {/* Menu Tag  */}
    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{ color: "#AAA" }}>
        {tags}
      </p>
    </div>
  </div>
);

MenuItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  tags: PropTypes.string,
};

export default MenuItem;
