import React from 'react'
import {BsLinkedin, BsGithub, /* BsDribbble */} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/yurischwab/' target="_blank"><BsLinkedin/></a>
      <a href='https://github.com/Yuri-byte' target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials