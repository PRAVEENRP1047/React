import Button from "components/common/Button";
import { ReactElement, useEffect, useRef, useState } from "react";

const UseRef = () => {
  const ref = useRef(0);
  // The initial value is used only for the first time
  // The value of current property of the useRef object will persist across re-renders.(doesn't get reset)
  // On every render, react returns the same object.
  // Also reading and updating the current property should be out of the render phase
  //  meaning inside the useEffect or event handlers
  // Changing refs won't cause a re-render.
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    if (ref.current === 0) {
      ref.current += 1;
    }
    setCount(count + 1);
  };

  console.log("count====>", count, "ref===>", ref);
  return (
    <>
      <Button onClick={handleButtonClick}>Increment</Button>
      <p>{ref.current}</p>
    </>
  );
};

export default UseRef;

// export default function UseRef() {
//   const inputRef = useRef<null | HTMLInputElement>(null);  // Initialize ref with null

//   // Even when the current value could change while assigning to other node the reference stays the same
//   useEffect(() => {
//     if(inputRef.current){
//       inputRef.current.focus(); // Automatically focuses the input element on mount
//     }
//   }, []);

//   return <input ref={inputRef} />;
// }
