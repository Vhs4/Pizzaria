import Cardapio from './components/Cardapio';
import Nav from './components/Nav';
import Banner from './components/BannerPagina4/Banner';

function Page4() {

  return (
    <>
      <Nav />
    <div className="div1320">
      <Banner />
      <div style={{marginTop: '2rem'}}/>
      <Cardapio />
      </div>
    </>
  )
}

export default Page4