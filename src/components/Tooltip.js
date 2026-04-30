import React from "react";

const Tooltip = ({ text, children }) => {
  return React.cloneElement(children, {
    className: "tooltip",
    children: (
      <>
        {children.props.children}
        <div>
          <div className="tooltiptext">{text}</div>
        </div>
      </>
    ),
  });
};

export default Tooltip;