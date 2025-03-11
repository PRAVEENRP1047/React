import { useState } from "react";

const MovingComponent = ({ children }: { children: React.ReactNode }) => {
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
    /**
     *  Why the {children} here didn't re-render on state change in this component ?
     */
  );
};

const SomeOtherComponent = () => {
  console.log("someother component");
  return (
    <MovingComponent>
      <ChildComponent />
    </MovingComponent>
  );
};

export default SomeOtherComponent;

const ChildComponent = () => {
  console.log("from child component");
  return <div>Hi .....from child component</div>;
};
