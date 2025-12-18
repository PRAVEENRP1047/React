import { memo, useCallback, useState } from "react";

const Child = memo(function Child({ onClick }: { onClick: () => void }) {
  console.log("Child render");
  return <button onClick={onClick}>Child</button>;
});

export default function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []);

  return (
    <>
      <Child onClick={handleClick} />
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </>
  );
}
