import { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { IoBagOutline } from 'react-icons/io5';
import logo from '../../assets/logo.svg';
import './styles.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className={isMenuOpen ? 'open' : ''}>
      <div className="header-content">
        {/* Menu */}
        <div
          className='toggle'
          onClick={handleMenuToggle}
        >
          <div className='line-a' />
          <div className='line-b' />
        </div>

        <div className='nav-container'>
          <nav>
            <div className='search-container'>
              <div className='search-content'>
                <div className='icon-bg'>
                  <HiOutlineSearch />
                </div>
                <input 
                  type='text'
                  placeholder='Buscar em apple.com'
                />
              </div>
            </div>

            <ul className='nav-links'>
              <li><a href='#'>Loja</a></li>
              <li><a href='#'>Mac</a></li>
              <li><a href='#'>iPad</a></li>
              <li><a href='#'>iPhone</a></li>
              <li><a href='#'>Watch</a></li>
              <li><a href='#'>AirPods</a></li>
              <li><a href='#'>TV e Casa</a></li>
              <li><a href='#'>Só na Apple</a></li>
              <li><a href='#'>Acessórios</a></li>
              <li><a href='#'>Suporte</a></li>
              <li className='search-item'>
                <HiOutlineSearch />
              </li>
            </ul>
          </nav>
        </div>
        {/* End of Menu */}

        <div className='logo'>
          <a href='#'>
            <img src={logo} alt="Logo da Apple"/>
          </a>
        </div>

        <button 
          className='cart'
          type='button'
        >
          <IoBagOutline />
        </button>
      </div>
    </header>
  );
}