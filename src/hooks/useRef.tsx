import { useRef } from "react";

export default function Example() {
  const ref = useRef(0);

  console.log("render:", ref.current);

  const handleClick = () => {
    ref.current = ref.current + 1;
    console.log("clicked:", ref.current);
  };

  return <button onClick={handleClick}>Click</button>;
}
