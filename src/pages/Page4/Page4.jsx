import Cardapio from '../../components/Menu/Menu';
import Nav from '../../components/Nav/Nav';
import Banner from '../../components/BannerPagina4/Banner';

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