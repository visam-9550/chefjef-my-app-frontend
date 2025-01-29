import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Cookie from "js-cookie";
import MenuIcon from "@mui/icons-material/Menu";
import {
  HeaderContainer,
  NavContainer,
  NavItem,
  LogoHead,
  MenuIconContainer,
  MenuContainer,
  MenuNavContainer,
  MenuNavItem
} from "./styledComponents";

function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const clickOnLogout = () => {
    try {
      const userDetails = Cookie.get("userDetails");
      const userToken = Cookie.get("userToken");

      if (userDetails) console.log(JSON.parse(userDetails));
      if (userToken) console.log(userToken);

      Cookie.remove("userToken");
      Cookie.remove("userDetails");
      navigate("/login");
    } catch (error) {
      console.error("Error removing cookies:", error);
    }
  };

  return (
    <>
      <HeaderContainer>
        <LogoHead src="https://res.cloudinary.com/dpeqiwvxt/image/upload/v1738122620/chefjef-removebg-preview_pbmfjz.png" alt="Logo" />
        <MenuIconContainer>
          <MenuIcon onClick={toggleMenu} />
        </MenuIconContainer>
        <NavContainer>
          <Link to="/">
            <NavItem>Home</NavItem>
          </Link>
          <Link to="/myrecipes">
            <NavItem>My Recipes</NavItem>
          </Link>
          <Link to="/favouriteRecipes">
            <NavItem>Favourites</NavItem>
          </Link>
          <Link to="/ourMission">
            <NavItem>Our Mission</NavItem>
          </Link>
          <NavItem onClick={clickOnLogout}>Logout</NavItem>
        </NavContainer>
      </HeaderContainer>

      {menuOpen && (
        <MenuContainer>
          <MenuNavContainer>
            {/* <Link to = "/"> */}
            <MenuNavItem to="/" onClick={() => setMenuOpen(false)}>Home</MenuNavItem>
            {/* </Link> */}
            <MenuNavItem to="/myrecipes" onClick={() => setMenuOpen(false)}>My Recipes</MenuNavItem>
            <MenuNavItem to="/favouriteRecipes" onClick={() => setMenuOpen(false)}>Favourites</MenuNavItem>
            <MenuNavItem to="/ourMission" onClick={() => setMenuOpen(false)}>Our Mission</MenuNavItem>
            <MenuNavItem as="p" onClick={() => { clickOnLogout(); setMenuOpen(false); }}>Logout</MenuNavItem>
          </MenuNavContainer>
        </MenuContainer>
      )}
    </>
  );
}

export default Header;

