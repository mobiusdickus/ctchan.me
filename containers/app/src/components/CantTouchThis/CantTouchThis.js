import React, { useRef, useState, useEffect } from 'react';
import UseMousePosition from '../../hooks/GetMousePosition';

function CantTouchThis() {
  const { x, y } = UseMousePosition();
  const hasMovedCursor = typeof x === "number" && typeof y === "number";
  
  const childRef = useRef(0);
  //const [width, setWidth] = useState(0)
  //const [height, setHeight] = useState(0)
  //useEffect(() => {
    //if(childRef.current){
      //setWidth(childRef.current.offsetWidth);
      //setHeight(childRef.current.offsetHeight);
    //};

  //}, [childRef]);
  //console.log(width, height);
  console.log("useRef: ", childRef.current);
  console.log("offsetWidth: ", childRef.current.offsetWidth, "offsetHeight: ", childRef.current.offsetHeight);
  
  //var offsetX = x - (width / 2);
  //var offsetY = y - (height / 2);
  var offsetX = x - (childRef.current.offsetWidth / 2);
  var offsetY = y - (childRef.current.offsetHeight / 2);

  console.log(offsetX, offsetY);

  var movingStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    border: "border-box",
    padding: "50px",
    transform: `translate3d(${offsetX}px, ${offsetY}px, 0)`
  };

  return (
      <div style={movingStyle} ref={childRef}>
        <p> { hasMovedCursor ? `Your cursor is at ${x}, ${y}.` : "Move your mouse around." } </p> 
      </div>
  );
}

export default CantTouchThis;
