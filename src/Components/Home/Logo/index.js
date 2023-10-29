import { useEffect, useRef } from 'react'
import './index.scss'
import LogoS from '../../../assets/images/avatar.png'


const Logo = () => {
   
    
    const solidLogoRef = useRef()

   

    return (
     <div className='solid-logo'>
            <img ref={solidLogoRef}  src={LogoS} alt='s' />
      </div>

      
    )
}

export default Logo