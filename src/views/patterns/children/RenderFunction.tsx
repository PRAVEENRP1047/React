import React, { ReactNode, useState } from "react";

const data = {data: "test"}

// This pattern is also called as render prop
const MovingComponent = ({
  children,
}: {
  children: ({ data }: { data: string }) => ReactNode;
}) => {
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
      {children(data)}
    </div>
  );
};

const SomeOutsideComponent = () => {
  console.log("some outside component=>");
  return (
    <MovingComponent>
      {() => <ChildComponent source="from some outside" />}
    </MovingComponent>
  );
};
export default SomeOutsideComponent;

const ChildComponent = ({ source }: { source: string }) => {
  console.log("child component==>", source);
  return (
    <h5>Hello , I'm from child component of children as render function</h5>
  );
};
