import React from 'react'
import MainNav from '../Navbar/MainNav'
import Tablist from './Tablist'
import { Outlet } from 'react-router-dom'
import { memo } from 'react'
const Food = () => {
  return (
    <div>
        <MainNav/>
        <Tablist/>
        <Outlet/>
    </div>
  )
}

export default memo(Food)