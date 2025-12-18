import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function UseLayoutEffect() {
  const cardRef = useRef<any>(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const rect = cardRef.current.getBoundingClientRect();
    setHeight(rect.height);
  }, []);

  return (
    <div>
      <div
        ref={cardRef}
        style={{ padding: 20, border: "1px solid black" }}
      >
        Some dynamic content
      </div>

      <p>Height: {height}px</p>
    </div>
  );
}
