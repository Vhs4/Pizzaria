import Cardapio from './components/Cardapio';
import Nav from './components/Nav';
import Banner from './components/BannerPagina4/Banner';

function Page4() {

  return (
    <>
      <Nav />
      <Banner />
      <div style={{marginTop: '2rem'}}/>
      <Cardapio />
    </>
  )
}

export default Page4