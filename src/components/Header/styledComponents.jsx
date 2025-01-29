import styled from "styled-components";
import { Link } from "react-router-dom"; 
export const HeaderContainer = styled.div`
  background-color: rgb(54, 28, 20);
  min-height: 60px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const LogoHead = styled.img`
  background-color: white;
  border-radius: 50%;
  height: 90%;
  width: 80px;
  margin-left: 30px;
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const MenuIconContainer = styled.div`
  margin-right: 30px;

  @media screen and (min-width: 767px) {
    display: none;
  }
`;

export const MenuContainer = styled.div`
  background-color:rgb(128, 93, 93);
  width: 10%;
  height: auto;
  padding: 15px;
  position: absolute;
  top: 70px;
  right: 0;
  border-radius: 8px;
  z-index: 1000;
  opacity: 0.5;

  @media screen and (max-width: 767px) {
    width: 20%;
  }
`;

export const MenuNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0px;
`;

export const NavItem = styled.p`
  font-family: Roboto, sans-serif;
  color: white;
  font-weight: 700;
  cursor: pointer;
  margin: 0;
  padding: 8px 12px;

  &:hover {
    color: #ffcc00;
  }
`;

export const MenuNavItem = styled(Link)`
  font-family: Roboto, sans-serif;
  color: white;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  padding: 8px 12px;
  display: block;

  &:hover {
    color: #ffcc00;
  }
`;
