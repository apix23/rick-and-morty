import logo from "../../assets/Rick_and_Morty.svg.png";
import logoMobile from "../../assets/mobileHeaderLogo.png";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <img
        src={logoMobile}
        className="header__logo-mobile"
        alt="Rick and Morty Logo"
      />
      <img src={logo} className="header__logo" alt="Rick and Morty Logo" />
    </header>
  );
};
