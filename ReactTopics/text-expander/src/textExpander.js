import { useState } from "react";

const containerStyle = {
  display: "flex",
  justifyContent: "space-between",
};

export default function TextExpander({
  collapseNumWords= 20,
  collapseButtonText='show less',
  expandButtonText='show more',
  buttonColor,
  children,
  className = "",
  expanded=false
}) {

    const [isExpanded,setIsExpanded]=useState(expanded);

    const displayText =isExpanded? children : (children.split(' ').slice(0,collapseNumWords).join(' ')+ '...')

  const buttonStyle = {
    backgroundColor: "inherit",
    border: "none",
    color: buttonColor,
  };

  return (
    <div style={containerStyle} className={className}>
      <p>
        {displayText}
        <button style={buttonStyle} onClick={()=>setIsExpanded(exp=> !exp)}>{isExpanded? collapseButtonText: expandButtonText}</button>
      </p>
    </div>
  );
}
