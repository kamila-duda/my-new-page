import React, { useState } from "react";
import {
  StyledNav,
  StyledNavList,
  StyledNavItem,
  StyledNavLink,
  StyledNavListMobile,
  StyledIcon,
  HomeIcon,
} from "./Navigation.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const menuItems = [
  { name: "About me", link: "/About" },
  { name: "My projects", link: "/Projects" },
  { name: "Contact", link: "/Contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledNav>
      <Link href="/">
        <HomeIcon onClick={() => setIsOpen(false)}>
          <FontAwesomeIcon icon={faHome} />
        </HomeIcon>
      </Link>
      <StyledNavList>
        {menuItems.map((item, index) => (
          <StyledNavItem key={index}>
            <Link href={item.link}>
              <StyledNavLink>{item.name} </StyledNavLink>
            </Link>
          </StyledNavItem>
        ))}
      </StyledNavList>
      <StyledNavListMobile open={isOpen}>
        {menuItems.map((item, index) => (
          <StyledNavItem key={index}>
            <Link href={item.link}>
              <StyledNavLink
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                {item.name}
              </StyledNavLink>
            </Link>
          </StyledNavItem>
        ))}
        <StyledIcon onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={faCode} />
        </StyledIcon>
      </StyledNavListMobile>
    </StyledNav>
  );
};
