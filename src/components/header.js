import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <div className='flex justify-center w-100 p20'>
      <Link className='link text-lg' to='/'>
        {siteTitle}
      </Link>
    </div>
  </header>
)

export default Header
