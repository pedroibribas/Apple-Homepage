import { AiFillPlayCircle } from 'react-icons/ai';
import { IoChevronForwardOutline } from 'react-icons/io5';
import { ImArrowUpRight2 } from 'react-icons/im';
import './styles.css';

export function Main() {
  return (
    <main>
      <section id='hero' className='section'>
        {/* iPhone 13 Pro */}
          <a href='#' className="product-container">
            <div className='product-bg iphonethirteenpro-bg' />
            <div className="product-content">
              <h2>iPhone 13 Pro</h2>
              <p>É todo Pro.</p>
              <a href='#'>
                Saiba mais
                <IoChevronForwardOutline className='icon-arrow' />
              </a>
              <a href='#'>
                Comprar
                <IoChevronForwardOutline className='icon-arrow' />
              </a>
            </div>
          </a>

        {/* iPhone SE */}
        <a href='#' className="product-container">
          <div className='product-bg iphonese-bg' />
          <div className="product-content">
            <span>Novo</span>
            <h2 className='title-iphonese' />
            <p>Tão poderoso. Tão ao seu alcance.</p>
            <a href='#'>
              Saiba mais
              <IoChevronForwardOutline className='icon-arrow' />
            </a>
            <a href='#'>
              Comprar
              <IoChevronForwardOutline className='icon-arrow' />
            </a>
          </div>
        </a>

        {/* Watch Series 7 */}
        <a href='#' className="product-container">
          <div className='product-bg applewatch-bg' />
          <div className="product-content">
            <h2 className='title-applewatch' />
            <p>Nossa maior tela até hoje.</p>
            <a href='#'>
              Saiba mais
              <IoChevronForwardOutline className='icon-arrow' />
            </a>
            <a href='#'>
              Comprar
              <IoChevronForwardOutline className='icon-arrow' />
            </a>
          </div>
        </a>
      </section>

      <section id='promotionals' className='section'>
        {/* iPad Air */}
        <a href='#' className="product-container">
          <div className='product-bg ipadair-bg' />
          <div className="product-content">
            <h3 className='title-ipadair' />
            <p className='desc-ipadair'>Cor e potência no ar.</p>
            <a className='link-light' href='#'>
              Saiba mais
              <IoChevronForwardOutline className='icon-arrow' />
            </a>
            <a className='link-light' href='#'>
              Comprar
              <IoChevronForwardOutline className='icon-arrow' />
            </a>
          </div>
        </a>

        {/* Mother's Day */}
        <a href='#' className="product-container">
          <div className='product-bg mothersday-bg' />
          <div className="product-content">
            <h3 className='title-mothersday'>Dia das Mães</h3>
            <p className='desc-mothersday'>
              Presentes que vão alegrar sua mãe o ano inteiro.
            </p>
            <a href='#'>
              Comprar
              <IoChevronForwardOutline className='icon-arrow' />
            </a>
          </div>
        </a>

        {/* Studio Display */}
        <a href='#' className="product-container">
          <div className='product-bg studiodisplay-bg' />
          <div className="product-content">
            <h3>Studio Display</h3>
            <p>Paixão à primeira vista.</p>
            <a href='#'>
              Saiba mais
              <IoChevronForwardOutline className='icon-arrow' />
            </a>
            <a href='#'>
              Comprar
              <IoChevronForwardOutline className='icon-arrow' />
            </a>
          </div>
        </a>

        {/* Mac Studio */}
        <a href='#' className="product-container">
          <div className='product-bg macstudio-bg' />
          <div className="product-content">
            <h3>Mac Studio</h3>
            <p>Usina criativa.</p>
            <a href='#'>
              Saiba mais
              <IoChevronForwardOutline className='icon-arrow' />
            </a>
            <a href='#'>
              Comprar
              <IoChevronForwardOutline className='icon-arrow' />
            </a>
          </div>
        </a>

        {/* Apple Arcade */}
        <a href='#' className="product-container">
          <div className='product-bg applearcade-bg' />
          <div className="product-content">
            <h3 className='title-applearcade' />
            <p>Gear.Club Stradale. Jogue agora.</p>
            <a href='#'>
              Saiba mais
              <IoChevronForwardOutline className='icon-arrow' />
            </a>
            <a href='#'>
              Teste gratuito¹
              <ImArrowUpRight2 className='icon-arrow' />
            </a>
          </div>
        </a>

        {/* Apple Tv Plus */}
        <a href='#' className="product-container">
          <div className='product-bg appletvplus-bg' />
          <div className="product-content flex-content">
            <h3 className='title-appletvplus' />
            <div>
              <h4 className='title-wecrashed' />
              <a className='link-light link-wecrashed' href='#'>
                Assista agora
                <AiFillPlayCircle className='icon-play' />
              </a>
            </div>
          </div>
        </a>
      </section>
    </main>
  );
}