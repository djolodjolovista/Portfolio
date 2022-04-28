import React from 'react';
import {ReactNavbar} from 'overlay-navbar';
import logo1 from '../images/logo2.png';
import {ImUser} from 'react-icons/im'

const Header = () => {
  return (
    <ReactNavbar 
    navColor1 = "white"
    navColor2 = "hsl(219, 48%, 8%)"
    burgerColor = "hsl(250, 100%, 75%)"
    burgerColorHover = "hsl(210,100%, 75%)"
    logoWidth = "150px"
    logo = {logo1}
    logoHoverColor = "hsl(210,100%, 75%)"
    nav2justifyContent = "space-around"
    nav3justifyContent = "space-around"
    link1Text = "Home"
    link2Text = "About"
    link3Text = "Projects"
    link4Text = "Contact"
    link1Url = "/"
    link2Url = "/about"
    link3Url = "/projects"
    link4Url = "/contact"
    profileIconUrl = "/account"
    link1ColorHover = "white"
    link1Color = "hsl(250, 100%, 75%)"
    link1Size = "1.5rem"
    profileIcon = {true}
    ProfileIconElement = {ImUser}
    profileIconColor = "hsl(250, 100%, 75%)"
    profileIconColorHover = "white"
    />
  )
}

export default Header