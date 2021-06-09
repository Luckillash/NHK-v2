import { useState } from 'react'
import nhk from '../../Recursos/nhk.png'
import NHKlogo from '../../Recursos/NHKlogo.png'

function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false)

  window.addEventListener('scroll', function (e) {
    var ultimaPosicion = window.scrollY
    if (ultimaPosicion > 30) {
      setIsScrolling(true)
    } else {
      setIsScrolling(false)
    }
  })

  window.removeEventListener('scroll', function (e) {})

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div onClick={() => scrollTop()}>
      <div className={isScrolling ? 'Scrolling' : 'NotScrolling'}>
        <img src={NHKlogo} alt='nhk' className='logo' />
        <p className='nav-title'>NIGHTHAWK.CL</p>
      </div>
    </div>
  )
}

export default Navbar
