import React,  {useRef, useState}  from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import underline_img from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

//anchorlink tag below makes a scroll to a specific section whose id is provided to it


const Navbar = () => {

  const[menu,setMenu] = useState("home");

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right='0';
  }

  const closeMenu = () => {
    menuRef.current.style.right="-350px"
  }

  return (
    <div className='navbar'>

    {/*First we gave a logo at the left side for our portfolio website */}
      <img src={logo} alt="" className='logo-img' />

      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />

      {/*Below is menu for navigation bar */}
      <ul ref={menuRef} className="nav-menu">

       <img src={menu_close} onClick={closeMenu}  alt=""  className='nav-mob-close'/>

        <li><AnchorLink className='anchor-link'  href="#home"><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline_img}/>:<></>}</li>

        <li><AnchorLink className='anchor-link' href="#about"><p onClick={() => setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline_img}/>:<></>}</li>

        <li><AnchorLink className='anchor-link' offset={50} href="#services"><p onClick={()=> setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={underline_img}/>:<></>}</li>

        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<img src={underline_img}/>:<></>}</li>

        <li><AnchorLink className='anchor-link' offset={50}  href="#contact"><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline_img}/>:<></>}</li>

      </ul>

      {/*Below written div is just to have gook look */}
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50}  href="#contact">Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
