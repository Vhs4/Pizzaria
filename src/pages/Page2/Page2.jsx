import Nav from '../../components/Nav/Nav';
import Banner2 from '../../components/BannerPagina2/Banner2';
import Cardapio2 from '../../components/secondMenu/secondMenu';
import './Page2.css'

const Page2 = () => {

  return (
    <>
    <Nav />
    <div className="div1320">
    <Banner2 />
    <div style={{marginTop: '2rem'}}/>
    <Cardapio2 />
    </div>
    </>
  )
}

export default Page2