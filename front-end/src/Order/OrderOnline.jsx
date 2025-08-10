import React from 'react'
import MainNav from '../Components/Navbar/MainNav'
import Tablist from '../Components/OrderOnline/Tablist'
import Inspiration from '../Components/OrderOnline/Inspiration'
import Topbrands from '../Components/OrderOnline/Topbrands'
import Resturants from '../Components/OrderOnline/Resturants'

const OrderOnline = () => {
  return (
    <div>
      {/* <MainNav /> */}
      {/* <Tablist /> */}
      <Inspiration />
      <Topbrands/>
      <Resturants />
    </div>
  )
}

export default OrderOnline