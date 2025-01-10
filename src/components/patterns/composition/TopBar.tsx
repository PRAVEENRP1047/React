import MainMenu from "components/patterns/composition/MainMenu";
import Logo from "components/patterns/composition/Logo";
import Create from "components/patterns/composition/Create";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="logo">logo</div>
      <MainMenu /> // The component becomes like it performs various things and composes random MainMenu Component
      <button className="create-button">Create</button>
      more top bar items here like search bar and profile menu
    </div>
  );
};

export default TopBar;

// As said in Rule #2, Here we make the component to implement various things

export const Topbar = () => {
  return (
    <div className="top-bar">
      <Logo />
      <MainMenu />
      <Create />
      more top bar components here like SearchBar and ProfileMenu
    </div>
  );
};
