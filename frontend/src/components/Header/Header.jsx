import React from 'react'
import {Container,Row,Button} from 'reactstrap'
import {NavLink,Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './header.css'
function Header() {
    const nav_links =[
        {
            path:'/home',
            display:'Home'
        },
        {
            path:'/about',
            display:'About'
        },
        {
            path:'/tours',
            display:'Tours'
        },
    ]
  return (
    <header className='header'>
     <Container>
     <Row>

        <div className="nav_wrapper d-flex align-items-center justify-content-between">
            <div className='logo'>
                <img src={logo} alt='img'/>
            </div>
            <div className='navigation'>
                <ul className='menu d-flex align-items-center gap-5'>
           {
            nav_links.map((e,i)=>{
                return (
                    <li className='nav_item' key={i}>
                        <NavLink to={e.path} className={navClass=> navClass.isActive ? 'active_link':''}>{e.display}</NavLink>
                    </li>
                )
            })
           }
                </ul>
            </div>
            <div className="nav_right d-flex align-items-center gap-4">
                <div className="nav_btns d-flex align-items-center gap-4">
                     <Button className='btn secondary__btn '><Link to='/login'>Login</Link></Button>
                     <Button className='btn primary__btn'><Link to='/singup'>singup</Link></Button>
                </div>
                <span className="mobile_menu">
                <i class="ri-menu-line"></i>
                </span>
            </div>
        </div>
     </Row>
     </Container>

    </header>
  )
}

export default Header