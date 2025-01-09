import React from "react";

// Composition means any component can contain other components within it's JSX.
const Button = ({
  title,
  onClick,
}: {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => <button onClick={onClick}>{title}</button>;

const Navigation = () => {
  const clickHandler = () => {
    console.log("Clicked the button....");
  };
  // Rendering out Button component in Navigation component. Composition!
  return (
    <>
      <Button title="Create" onClick={clickHandler} />
    </>
  );
};

export default Navigation;
