import SideBar from "components/patterns/composition/SideBar";
import TopBar from "components/patterns/composition/TopBar";
import React from "react";

interface IButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ onClick, children }: IButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};

const Navigation = () => {
  const clickHandler = () => {
    console.log("Clicked the button....");
  };
  // Container Components Composition is very handy as the child component doesn't need to bother
  // about the content it will receive and children prop variable of react takes care of it.
  return (
    <>
      <Button onClick={clickHandler}>Create</Button>
    </>
  );
};

export default Navigation;

/**
 *  When should we extract a component?
 *
 *    Rule #1: When the component is too big
 *    Rule #2: A component should "implement various things" or "composes various components together not both"
 *             Meaning in TopBar component
 *
 */

export const JiraIssuePage = () => {
  return (
    <div className="app">
      <TopBar /> // TopBar component extraction is fine // Check TopBar MainMenu
      extraction
      <div className="main-content">
        <SideBar /> // SideBar component extraction is fine
        <div className="page-content">{/* <Issue /> */}</div>
      </div>
    </div>
  );
};

/** After decomposition */
const JiraPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="app">
      <TopBar />
      <div className="main-content">
        <SideBar />
        <div className="page-content">{children}</div>
      </div>
    </div>
  );
};

export const DecomposedJiraIssuePage = () => {
  return (
    <JiraPageLayout>
      Issue Component
    </JiraPageLayout>
  );
};

/*
 * Reference:
 * https://levelup.gitconnected.com/react-components-composition-how-to-get-it-right-fb52ea06632a
 * */
