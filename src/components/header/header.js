import React from "react";
import "./header.css";
import { Navbar, Link, } from "@nextui-org/react";
import { FaInstagram, FaYoutube } from 'react-icons/fa';

function Header() {
    const items = [
      {name: 'Home', href:'/'},
      {name: 'APL 6.0', href: '/seasons/apl6'},
      {name: 'RoadToAPL', href:'/roadtoapl'},
      {name: 'Registration', href:'/registration'},
      {name: 'Slots', href:'/slots'},
      {name: 'Seasons', href:'/seasons'},
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
          <Link target="_blank" href="https://www.instagram.com/apl.ashoka/">
            <FaInstagram className="instagram-logo" size={'20px'} />
          </Link>
          <Link target="_blank" href="https://www.youtube.com/@ashokapremierleague1964">
            <FaYoutube className="youtube-logo" size={'20px'}/>
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