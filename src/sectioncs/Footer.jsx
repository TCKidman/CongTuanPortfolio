import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='flex flex-col justify-center md:items-start items-center'>
                    <a href="/" className='text-white'>Visit my blog</a>
                </div>
                <div className='socials'>
                    {socialImgs.map((img) => (
                        <a className='icon target="_blank"' href={img.link} key={img.url}>
                            <img src={img.imgPath} />
                        </a>
                    ))}
                </div>

                <div className='flex flex-col justify-center'>
                    <p className='text-center md:text-end text-white' >
                        © {new Date().getFullYear()} Cong Tuan | Kidman. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer