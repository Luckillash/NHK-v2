import { fotosFeed1, fotosFeed2 } from '../../Recursos/data'
import { useState, useEffect } from 'react'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'

function PhotoFeed() {
  const [feed1, setFeed1] = useState(0)
  const [feed2, setFeed2] = useState(0)
  const [btnFeed1, setBtnFeed1] = useState(false)
  const [btnFeed2, setBtnFeed2] = useState(false)

  useEffect(() => {
    if (feed1 === 3) {
      setFeed1(0)
    }
    if (feed2 === 3) {
      setFeed2(0)
    }
    if (feed1 === -1) {
      setFeed1(2)
    }
    if (feed2 === -1) {
      setFeed2(2)
    }
  }, [feed1, feed2])

  const anterior1 = () => {
    setFeed1(feed1 - 1)
  }

  const siguiente1 = () => {
    setFeed1(feed1 + 1)
  }

  const anterior2 = () => {
    setFeed2(feed2 - 1)
  }

  const siguiente2 = () => {
    setFeed2(feed2 + 1)
  }

  return (
    <div className='photoFeed'>
      <div className='photoFeed-Body'>
        <div
          className='feed1'
          onMouseEnter={() => setBtnFeed1(true)}
          onMouseLeave={() => setBtnFeed1(false)}
        >
          <img src={fotosFeed1[feed1]} alt='fotosFeed1' className='foto' />
          {btnFeed1 ? (
            <div>
              <div className='buttonFeed1'>
                <MdNavigateBefore
                  className='before'
                  onClick={() => anterior1()}
                />
                <MdNavigateNext
                  className='after'
                  onClick={() => siguiente1()}
                />
              </div>
            </div>
          ) : null}
        </div>
        <div
          className='feed2'
          onMouseEnter={() => setBtnFeed2(true)}
          onMouseLeave={() => setBtnFeed2(false)}
        >
          <img src={fotosFeed2[feed2]} alt='fotosFeed2' className='foto' />
          {btnFeed2 ? (
            <div className='buttonFeed2'>
              <MdNavigateBefore
                className='before'
                onClick={() => anterior2()}
              />
              <MdNavigateNext className='after' onClick={() => siguiente2()} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default PhotoFeed
