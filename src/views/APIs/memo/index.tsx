/**
 * memo
 *  When the parent component is re-rendered, react usually skips rendering
 *  the memoized component, as long as its props are unchanged.
 *  It is just a performance optimization. React doesn't guarantee this.
 *  React.memo returns a new memoized component. It doesn't modify the existing component
 */

/** Skipping re-rendering when props are unchanged */

import {
  Context,
  ContextType,
  createContext,
  Dispatch,
  memo,
  SetStateAction,
  useContext,
  useState,
} from "react";

// export default function Memo() {
//   const [name, setName] = useState("");
//   const [address, setAddress] = useState("");
//   return (
//     <>
//       <label>
//         Name{": "}
//         <input value={name} onChange={(e) => setName(e.target.value)} />
//       </label>
//       <label>
//         Address{": "}
//         <input value={address} onChange={(e) => setAddress(e.target.value)} />
//       </label>
//       <Greeting name={name} />
//     </>
//     /**
//      * notice that the Greeting component re-renders whenever name is changed
//      * (because that’s one of its props), but not when address is changed
//      * (because it’s not passed to Greeting as a prop)
//      */
//   );
// }

// const Greeting = memo(function Greeting({ name }: { name: string }) {
//   console.log("Greeting was rendered at", new Date().toLocaleTimeString());
//   return (
//     <h3>
//       Hello{name && ", "}
//       {name}!
//     </h3>
//   );
// });

/**
 * Optimizing with memo is only valuable when your component re-renders often with the same
 * exact props, and its re-rendering logic is expensive.
 */

/**
 * Updating a memoized component using state
 *
 *  Even when a component is memoized, it will still re-render when its own state changes
 */

// export default function Memo() {
//   const [name, setName] = useState("");
//   const [address, setAddress] = useState("");
//   return (
//     <>
//       <label>
//         Name{": "}
//         <input value={name} onChange={(e) => setName(e.target.value)} />
//       </label>
//       <label>
//         Address{": "}
//         <input value={address} onChange={(e) => setAddress(e.target.value)} />
//       </label>
//       <Greeting name={name} />
//     </>
//   );
// }

// const Greeting = memo(function Greeting({ name }: { name: string }) {
//   console.log("Greeting was rendered at", new Date().toLocaleTimeString());
//   const [greeting, setGreeting] = useState("Hello");
//   return (
//     <>
//       <h3>
//         {greeting}
//         {name && ", "}
//         {name}!
//       </h3>
//       <MemoizedGreetingSelector value={greeting} onChange={setGreeting} />
//     </>
//   );
// });

// const MemoizedGreetingSelector = memo(function GreetingSelector({
//   value,
//   onChange,
// }: {
//   value: string;
//   onChange: Dispatch<SetStateAction<string>>;
// }) {
//   console.log(
//     "Greeting Selector was rendered at",
//     new Date().toLocaleTimeString()
//   );
//   return (
//     <>
//       <label>
//         <input
//           type="radio"
//           checked={value === "Hello"}
//           onChange={(e) => onChange("Hello")}
//         />
//         Regular greeting
//       </label>
//       <label>
//         <input
//           type="radio"
//           checked={value === "Hello and welcome"}
//           onChange={(e) => onChange("Hello and welcome")}
//         />
//       </label>
//     </>
//   );
// });

/**
 * Updating a memoized component using a context
 *
 *    Even when a component is memoized, it will still re-render when
 *  a context that it’s using changes.
 */

const ThemeContext: any = createContext(null);

export default function Memo() {
  const [theme, setTheme] = useState<string>("dark");

  function handleClick() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={handleClick}>Switch theme</button>
      <Greeting name="Taylor" />
    </ThemeContext.Provider>
  );
}

const Greeting = memo(function Greeting({ name }: { name: string }) {
  const theme = useContext(ThemeContext);
  console.log("Greeting was rendered with theme===>",theme,);
  return <h3>Hello, {name}!</h3>;
});

/**
 * Reference:
 * https://react.dev/reference/react/memo
 */
