import HeroBanner from '../../Recursos/hero.jpg'
import Rellax from 'rellax'

function Hero() {
  new Rellax('.rellax', {
    speed: 7,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false,
  })

  return (
    <div className='header'>
      <img src={HeroBanner} alt='' className='hero rellax' />
      <span className='header-title'>NIGHTHAWK</span>
    </div>
  )
}

export default Hero
