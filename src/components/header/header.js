import React from "react";
import "./header.css";
import { Navbar, Link, useTheme } from "@nextui-org/react";
import { FaInstagram } from 'react-icons/fa';

function Header() {
    const { theme } = useTheme()
    const items = [
      {name: 'Home', href:'/'},
      {name: 'Registration', href:'/registration'},
      {name: 'Schedule', href:'/schedule'},
      {name: 'Slots', href:'/slots'},
      {name: 'Seasons', href:'/seasons'},
      {name: 'About', href:'/about'},
      {name: 'Contact', href:'/contact'}
    ]

    var active = window.location.pathname

    return(
      <Navbar className="navbar" variant="static">
        <Navbar.Toggle color="inherit" showIn="xs" />
        <Navbar.Brand hideIn="xs">
        APL
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="highlight-rounded">
        {items.map((item, index) => (
            <Navbar.Link key={item} isActive={item.href===active.substring(0,item.href.length+1)} href={item.href}>
              {item.name}
            </Navbar.Link>
          ))}
        </Navbar.Content>
        <Navbar.Content>
          <Link href="https://www.instagram.com/apl.ashoka/">
            <FaInstagram />
          </Link>
        </Navbar.Content>
        <Navbar.Collapse showIn="xs">
        {items.map((item, index) => (
          <Navbar.CollapseItem key={item} isActive={item.href===active.substring(0,item.href.length+1)}>
            <Link href={item.href}
              css={{
                minWidth: "100%",
              }}
            >
              {item.name}
            </Link>
          </Navbar.CollapseItem>
        ))}
        </Navbar.Collapse>
      </Navbar>
    )
  }

export default Header;