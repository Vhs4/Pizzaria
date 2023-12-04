import './Banner2.css';
import { FaApple } from "react-icons/fa";
import { RiGooglePlayLine } from "react-icons/ri";

const Banner2 = () => {
  return (
    <>
      <section className="flex items-center mt-4 justify-center">
        <div className="bannertwo">
          <div className="contenttwo">
            <div className="buttonstwo ml-2 mt-6 md:mt-8 lg:mt-10 xl:mt-12 flex justify-start">
              <h1 className="text-2xl text-white font-normal">
                Pegue uma fatia
              </h1>
            </div>
            <div className="buttonstwo margin-p mt-6 md:mt-8 lg:mt-10 xl:mt-12 flex justify-start">
              <button className="buttontwo md:ml-2 flex items-center">
                <FaApple style={{ fontSize: '2rem' }} /><span style={{fontSize: '.8rem'}}>Download on</span><span className="font-bold"></span>App Store</button>
              <button className="buttontwo md:ml-2 flex items-center">
                <RiGooglePlayLine style={{ fontSize: '2rem' }} /><span style={{fontSize: '.8rem'}}>Get it on</span><span className="font-bold">Google Play</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    <div className="divmeiotwo justify-start flex flex-col items-center md:flex-row md:items-start">
      <h1 className="font-bold text-xl" style={{color: '#B30733', marginBottom: '1rem', marginTop: '0'}}>NOSSO CARDÁPIO</h1>
    </div>
    <div  className="divultwo justify-start flex flex-col items-center md:flex-row md:items-start">
      <ul className='flex'>
        <li className="text-sm" style={{backgroundColor: '#EF4C00', borderRadius: '1rem', padding: '.5rem', color: 'white'}}>Todas (170)</li>
        <li style={{backgroundColor: 'white', borderRadius: '1rem', padding: '.4rem', color: 'gray'}}>
Brasileiras (41)</li>
        <li style={{backgroundColor: 'white', borderRadius: '1rem', padding: '.4rem', color: 'gray'}}>
Italiana (25)</li>
      </ul>
      </div>
      <div className="divfinaltwo justify-start flex flex-col items-center md:flex-row md:items-start">
      <h1 className="font-bold text-xl" style={{color: '#B30733', marginBottom: '1rem', marginTop: '0'}}>POPULARES</h1><div className='small-border mr-4'></div>
    </div>
    </>
  );
}

export default Banner2;
