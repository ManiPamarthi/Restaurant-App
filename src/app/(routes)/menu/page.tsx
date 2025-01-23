import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import MenuSection from '@/features/menu/components/menu-section';
import React from 'react'

const Menu = () => {
  return (
    <div>
        <Header/>
        <MenuSection/>
        <Footer/>
    </div>
  )
}

export default Menu;