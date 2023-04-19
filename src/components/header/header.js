import React from "react";
import "./header.css";
import { Navbar, Link, Image} from "@nextui-org/react";
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import TransparentLogo from '../../assets/images/TransparentLogo.png'

function Header() {
    const items = [
      {name: 'Home', href:'/'},
      {name: 'APL x FanUp', href:'/fanup'},
      {name: 'APL 6.0', href: '/seasons/apl6'},
      {name: 'RoadToAPL', href:'/roadtoapl'},
      {name: 'Registration', href:'/registration'},
      {name: 'Slots', href:'/slots'},
      {name: 'Seasons', href:'/seasons'},
    ]

    var active = window.location.pathname

    return(
      <Navbar className="navbar" variant="static">
        <Navbar.Toggle color="inherit" showIn="sm" />
        <Navbar.Brand hideIn="sm" css={{'&:hover':{transform: 'scale(1.25)'}}}>
          <Image css={{
            width: '40px',
            height: '40px',
            transitionDuration: '0.5s',
            transitionProperty: 'transform',
            '&:hover':{
              cursor: 'pointer',
              transform: 'rotate(360deg)',
            }
          }} src={TransparentLogo} 
          onClick={()=>{
            window.location.pathname=''
          }}/>
        </Navbar.Brand>
        <Navbar.Content hideIn="sm" variant="highlight-rounded">
        {items.map((item, index) => (
            <Navbar.Link key={index} isActive={item.href===active.substring(0,item.href.length+1)} href={item.href}>
              {item.name}
            </Navbar.Link>
          ))}
          
        </Navbar.Content>
        <Navbar.Content showIn={'sm'}>
          <Image css={{
              width: '40px',
              height: '40px'
            }} src={TransparentLogo} />
        </Navbar.Content>
        <Navbar.Content>
          <Link target="_blank" href="https://www.instagram.com/apl.ashoka/">
            <FaInstagram className="instagram-logo" size={'25px'} />
          </Link>
        </Navbar.Content>
        
        
        <Navbar.Collapse showIn={"sm"}>
        {items.map((item, index) => (
          <Navbar.CollapseItem key={index} isActive={item.href===active.substring(0,item.href.length+1)}>
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