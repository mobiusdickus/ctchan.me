import React, { useRef } from 'react';
import UseMousePosition from '../../hooks/UseMousePosition';
import './CantTouchThis.css';

function CantTouchThis() {
  // Get mouse position
  const { x, y } = UseMousePosition();
  const hasMovedCursor = typeof x === "number" && typeof y === "number";
  
  // Create ref hook
  const childRef = useRef(0);
  console.log("offsetWidth: ", childRef.current.offsetWidth, "offsetHeight: ", childRef.current.offsetHeight);
  
  // Set random element offset
  var offsetX = x - (Math.random() * 600);
  var offsetY = y - (Math.random() * 600);
  console.log(offsetX, offsetY);

  // Add variable element style
  var movingStyle = {
    transform: `translate3d(${offsetX}px, ${offsetY}px, 0)`,
  };

  return (
      <div className="box" style={movingStyle} ref={childRef}>
        <p> { hasMovedCursor ? `Your cursor is at ${x}, ${y}.` : "Move your mouse around." } </p> 
      </div>
  );
}

export default CantTouchThis;
