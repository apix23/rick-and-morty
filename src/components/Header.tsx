import logo from "../assets/Rick_and_Morty.svg.png";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <img src={logo} alt="Rick and Morty Logo" />
    </header>
  );
};
