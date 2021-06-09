import foto1 from '../../Recursos/Info/1.png'
import foto2 from '../../Recursos/Info/2.png'
import foto3 from '../../Recursos/Info/3.png'

function Info() {
  return (
    <div className='info'>
      <div className='info-container'>
        <img src={foto1} alt='' className='fotoInfo' />
        <img src={foto2} alt='' className='fotoInfo' />
        <img src={foto3} alt='' className='fotoInfo' />
      </div>
    </div>
  )
}

export default Info
