import React from "react"
import Spacer from "./spacer"

const Footer = () => (
  <footer className='w-100 footer--wrapper '>
    <div className='sticky--block' />
    <div className='p20 bg-dark flex flex-col align-center justify-center text-center sticky bottom'>
      <Spacer />
      <p className='h1'>Florist</p>
      <p className='text-lg mt20 serif'>Blossoming Beauty, Rooted in Elegance</p>
      <Spacer />
      <p className='mt20'> © {new Date().getFullYear()}</p>
    </div>
  </footer>
)

export default Footer
