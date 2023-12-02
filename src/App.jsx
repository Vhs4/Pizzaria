import './App.css'
import Banner from './components/Banner'
import Cardapio from './components/Cardapio'
import Nav from './components/Nav'

function App() {

  return (
    <>
      <Nav />
      <Banner />
      <div style={{marginTop: '330px'}}/>
      <Cardapio />
    </>
  )
}

export default App