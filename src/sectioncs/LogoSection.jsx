import React from 'react'
import { logoIconsList } from '../constants'

const LogoIcon = ({icon}) => {
 return(
    <div className='flex-none flex-center marquee-item'>
        <img src={icon.imgPath} alt={icon.name} />
    </div>
 )
}

const LogoSection = () => {
  return (
    <div className='md:my-20 my-10 relative'>
        <div className='gradient-edge'></div>
        <div className='gradient-edge'></div>

        <div className='marquee h-36'>
            <div className='marquee-box-right-left md:gap-12 gap-5'>
                {logoIconsList.map((icon) =>(
                    <LogoIcon key={icon.name} icon={icon} />
                ))}
                {logoIconsList.map((icon) =>(
                    <LogoIcon key={icon.name} icon={icon} />
                ))}
            </div>
        </div>

        <div className='marquee h-36'>
            <div className='marquee-box-left-right md:gap-12 gap-5'>
                {logoIconsList.map((icon) =>(
                    <LogoIcon key={icon.name} icon={icon} />
                ))}
                {logoIconsList.map((icon) =>(
                    <LogoIcon key={icon.name} icon={icon} />
                ))}
            </div>
        </div>

        <div className='marquee h-36'>
            <div className='marquee-box-right-left md:gap-12 gap-5'>
                {logoIconsList.map((icon) =>(
                    <LogoIcon key={icon.name} icon={icon} />
                ))}
                {logoIconsList.map((icon) =>(
                    <LogoIcon key={icon.name} icon={icon} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default LogoSection