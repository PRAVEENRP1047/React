import Button from "components/common/Button";
import { memo, useState } from "react";

interface IMemoChildProps {
  handleClick: () => void;
}

/* When you use memo, your component re-renders whenever any prop is not shallowly equal
 * to what it was previously. This means that React compares every prop in your component
 * with its previous value using the Object.is comparison. Note that Object.is(3, 3) is true,
 * but Object.is({}, {}) is false.
 **/

// When to use:
//  Use it when there are unnecessary renders and when the props passed to the 
//  child are same most of the times

/* Rerender happens to a memoized component when:
 * props passed to memoized component changes
 * when context used by memoized component changes
 * when state of the memoized component changes
 **/

const MemoParentComponent = () => {
  console.log("memo parent component=>");
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Button onClick={handleClick}>Increment</Button>
      <MemoChildComponent />
    </>
  );
};

export default MemoParentComponent;

const MemoChildComponent = memo(() => {
  console.log("memo child====>");
  return <></>;
});
