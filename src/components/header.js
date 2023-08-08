import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <div className='flex p20'>
      <Link className='link' to="/">{siteTitle}</Link>
    </div>
  </header>
)

export default Header
