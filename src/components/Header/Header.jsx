import React from 'react'
import { useNavigate } from 'react-router-dom';
import Cookie from "js-cookie"
import {HeaderContainer, NavContainer, NavItem, LogoHead, MenuIconContainer, MenuContainer, MenuNavContainer, MenuNavItem} from "./styledComponents"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Link } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [initialMenuState, setMenuState] = useState(false)
  const menu = () =>{
    setMenuState(!initialMenuState)
    console.log(initialMenuState)
    }
  const clickOnLogout = () =>{
    console.log(JSON.parse(Cookie.get("userDetails")))
    console.log(Cookie.get("userToken"))
    Cookie.remove("userToken")
    Cookie.remove("userDetails")
    navigate("/login")
  }
  return (
    <>
    <HeaderContainer>
      <LogoHead src = "https://res.cloudinary.com/dpeqiwvxt/image/upload/v1738122620/chefjef-removebg-preview_pbmfjz.png" />
      <MenuIconContainer>
        <MenuIcon onClick = {menu}/>
      </MenuIconContainer>
      <NavContainer>
            <Link to = "/">
              <NavItem>Home</NavItem>
            </Link>
            <Link to = "/myrecipes">
              <NavItem>My Recipes</NavItem>
            </Link>
            <Link to = "/favouriteRecipes">
            <NavItem >Favourites</NavItem>
            </Link>
            <Link to = "/ourMission">
              <NavItem>Our Mission</NavItem>
            </Link>
            <NavItem onClick = {clickOnLogout}>Logout</NavItem>
      </NavContainer>
    </HeaderContainer>
    {initialMenuState && 
        <MenuContainer>
          <MenuNavContainer>
            <Link to = "/">
              <MenuNavItem >Home</MenuNavItem>
            </Link>
            <Link to = "/myrecipes">
              <MenuNavItem >My Recipes</MenuNavItem>
            </Link>
            <Link to = "/favouriteRecipes">
              <MenuNavItem >Favourites</MenuNavItem>
            </Link>
            <Link to = "/ourMission">
              <MenuNavItem >Our Mission</MenuNavItem>
            </Link>
            <MenuNavItem onClick = {clickOnLogout}>Logout</MenuNavItem>
          </MenuNavContainer>
        </MenuContainer>
    }
    </>
    
  )
}

export default Header