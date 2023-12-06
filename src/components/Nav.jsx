import { FaUserCircle } from 'react-icons/fa';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import './Nav.css';

const Nav = () => {
  return (
    <>
      <nav className='flex max-h-12'>
        <h1 className='flex-1 ml-4 mt-2'>CODAR PIZZARIA</h1>
        <ul className='flex items-center cursor-pointer'>
          <li className='items-nav hover:border-b-2 border-b-transparent hover:border-orange-500 mr-4 buscar'>
            Buscar
          </li>
          <li className='items-nav hover:border-b-2 border-b-transparent hover:border-orange-500 mr-4'>
            Sobre
          </li>
          <li className='items-nav hover:border-b-2 border-b-transparent hover:border-orange-500 mr-4'>
            Como funciona
          </li>
          <li className='items-nav hover:border-b-2 border-b-transparent hover:border-orange-500 mr-4'>
            Planos
          </li>
          <li className='items-nav hover:border-b-2 border-b-transparent hover:border-orange-500 mr-4'>
            Contato
          </li>
          <button className='profile mr-2'>
            <FaUserCircle style={{ fontSize: '1.5rem' }} />
          </button>
          <div className='cart-border mr-4'></div>
          <button className='cartTop mt-0.5 mr-4 px-2 py-2 items-center flex'><HiOutlineShoppingBag style={{ fontSize: '1.5rem', marginRight: '.5rem' }} />(0) Items</button>
        </ul>
      </nav>

      {/* Carrinho flutuante na parte inferior para dispositivos móveis */}
      <div className='mobile-cart'>
        <button className='cart px-2 py-2 items-center flex'>
          <HiOutlineShoppingBag
            style={{ fontSize: '1.5rem', marginRight: '.5rem' }}
          />
          (0) Items
        </button>
      </div>
    </>
  );
};

export default Nav;
