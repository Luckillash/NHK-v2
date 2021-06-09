import Short from '../../Recursos/short.jpg'
import Large from '../../Recursos/large.jpg'

function Colecciones() {
  return (
    <div className='colecciones'>
      <div className='coleccion-1'>
        <img src={Short} alt='' className='short' />
        <div className='info1'>
          <strong className='nombre'>NHK SHORT</strong>
          <br />
          <p className='precio'>$12.990</p>
          <button className='buttonBuy'>COMPRAR</button>
        </div>
      </div>
      <div className='coleccion-2'>
        <div className='info2'>
          <strong className='nombre'>NHK LARGE</strong>
          <p className='precio'>$15.990</p>
          <button className='buttonBuy'>COMPRAR</button>
        </div>
        <img src={Large} alt='' className='large' />
      </div>
      <hr />
    </div>
  )
}

export default Colecciones
