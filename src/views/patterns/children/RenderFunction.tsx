import Button from "components/common/Button";
import React, { MouseEvent, useState } from "react";

const MovingComponent = ({ children }: any) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const moveHandler = (e: React.MouseEvent) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };
  console.log("parent");
  return (
    <div
      onMouseMove={moveHandler}
      style={{ height: 700, width: 1000, left: coords.x, top: coords.y }}
    >
      {children}
    </div>
  );
};

// const SomeOutsideComponent = () => {
//   console.log("some outside component=>");
//   return (
//     <MovingComponent>{() => <ChildComponent />}</MovingComponent>
//     /**
//      * Above, the child is passed as a render function
//      * Child re-renders on state change in Moving Component(parent)
//      *
//      * But why SomeOutsideComponent doesn't render to which Child belongs to ?
//      */
//   );
// };

const ChildComponent = () => {
  console.log("child component==>");
  return (
    <h5>Hello , I'm from child component of children as render function</h5>
  );
};

/** React.memo behaviour => to check this change the moving component child component to children prop */

// wrapping MovingComponent in memo to prevent it from re-rendering
const MovingComponentMemo = React.memo(MovingComponent);

// const SomeOutsideComponent = () => {
//   // uses button as child component
//   const [count, setCount] = useState(0);
//   console.log("some outside component=>");

//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   return (
//     <MovingComponentMemo>
//       <ChildComponent />
//       <Button onClick={handleIncrement}>Click {count}</Button>
//     </MovingComponentMemo>
//     //  ChildComponent will still re-render when SomeOutsideComponent re-renders
//     //  In normal parent-child relation wrapping with memo like above will work
//     //  But when like above code where child component is passed as children it will still re-render
//   );
// };

// wrapping ChildComponent in memo to prevent it from re-rendering
const ChildComponentMemo = React.memo(ChildComponent);

const SomeOutsideComponent = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <MovingComponent>
      <ChildComponentMemo />
      <Button onClick={handleIncrement}>Click {count}</Button>
    </MovingComponent>
    /**
     * In this even when the parent is not memoized. 
     * And child component is wrapped with React.memo, the child won't re-render
     */
  );
};

export default SomeOutsideComponent;

/** Reference
 * https://adevnadia.medium.com/the-mystery-of-react-element-children-parents-and-re-renders-9172f2891e9c
 */
