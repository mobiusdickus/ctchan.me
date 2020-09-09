import React, { useRef } from 'react';
import UseMousePosition from '../../hooks/UseMousePosition';
import './CantTouchThis.css';

function CantTouchThis() {
  const { x, y } = UseMousePosition();
  const hasMovedCursor = typeof x === "number" && typeof y === "number";
  
  const childRef = useRef(0);

  console.log("offsetWidth: ", childRef.current.offsetWidth, "offsetHeight: ", childRef.current.offsetHeight);
  
  var offsetX = x - (Math.random() * 600);
  var offsetY = y - (Math.random() * 600);
  
  console.log(offsetX, offsetY);

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
