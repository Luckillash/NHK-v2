import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'
// PÁGINAS
import Home from './Páginas/Home'
import Error from './Páginas/error'
// COMPONENTES
import Navbar from './Componentes/Cabeza/navbar'
import Loading from './Componentes/loading'

function App() {
  const [loader, setLoader] = useState(false)

  const scrollTop = () => {
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    scrollTop()
    setLoader(true)
    setTimeout(() => {
      scrollTop()
    }, 1000)
    setTimeout(() => {
      setLoader(false)
    }, 2000)
  }, [])

  return (
    <div>
      {loader ? <Loading /> : null}
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
