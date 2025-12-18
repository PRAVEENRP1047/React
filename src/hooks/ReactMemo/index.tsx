import { memo, useState } from "react";

const Child = memo(function Child({ value }: { value: string }) {
  console.log("Child render");
  return <div>{value}</div>;
});

export default function Parent() {
  const [count, setCount] = useState(0);
  console.log("count===>", count);
  return (
    <>
      <Child value="Hello" />
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </>
  );
}
