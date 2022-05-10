import { useState } from 'react';

export function NavFooter() {
  const [isFirstSectionOpen, setIsFirstSectionOpen] = useState(false);
  const [isSecondSectionOpen, setIsSecondSectionOpen] = useState(false);
  const [isThirdSectionOpen, setIsThirdSectionOpen] = useState(false);
  const [isFourthSectionOpen, setIsFourthSectionOpen] = useState(false);
  const [isFifthSectionOpen, setIsFifthSectionOpen] = useState(false);
  const [isSixthSectionOpen, setIsSixthSectionOpen] = useState(false);
  const [isSeventhSectionOpen, setIsSeventhSectionOpen] = useState(false);
  const [isEighthSectionOpen, setIsEighthSectionOpen] = useState(false);
  const [isNinthSectionOpen, setIsNinthSectionOpen] = useState(false);

  function handleOpenFirstSection() {
    setIsFirstSectionOpen(!isFirstSectionOpen);
  }

  function handleOpenSecondSection() {
    setIsSecondSectionOpen(!isSecondSectionOpen);
  }

  function handleOpenThirdSection() {
    setIsThirdSectionOpen(!isThirdSectionOpen);
  }
  
  function handleOpenFourthSection() {
    setIsFourthSectionOpen(!isFourthSectionOpen);
  }

  function handleOpenFifthSection() {
    setIsFifthSectionOpen(!isFifthSectionOpen);
  }

  function handleOpenSixthSection() {
    setIsSixthSectionOpen(!isSixthSectionOpen);
  }
  function handleOpenSeventhSection() {
    setIsSeventhSectionOpen(!isSeventhSectionOpen);
  }

  function handleOpenEighthSection() {
    setIsEighthSectionOpen(!isEighthSectionOpen);
  }

  function handleOpenNinthSection() {
    setIsNinthSectionOpen(!isNinthSectionOpen);
  }

  return (
    <div className='navigation'>
      {/* #1 */}
      <div className={isFirstSectionOpen ? 'nav-section open' : 'nav-section'}>
        <h5 onClick={handleOpenFirstSection}>
          Descobrir e Comprar
        </h5>
        <div className='links-container'>
          <ul>
            <li><a href='a'>Loja</a></li>
            <li><a href='a'>Mac</a></li>
            <li><a href='a'>iPad</a></li>
            <li><a href='a'>iPhone</a></li>
            <li><a href='a'>Watch</a></li>
            <li><a href='a'>AirPods</a></li>
            <li><a href='a'>TV e Casa</a></li>
            <li><a href='a'>iPod Touch</a></li>
            <li><a href='a'>AirTag</a></li>
            <li><a href='a'>Acessórios</a></li>
          </ul>
        </div>
      </div>
      <div>
        {/* #2 */}
        <div className={isSecondSectionOpen ? 'nav-section open' : 'nav-section'}>
          <h5 onClick={handleOpenSecondSection}>
            Serviços
          </h5>
          <div className='links-container'>
            <ul>
              <li><a href='a'>Apple Music</a></li>
              <li><a href='a'>Apple TV+</a></li>
              <li><a href='a'>Apple Fitness+</a></li>
              <li><a href='a'>Apple Arcade</a></li>
              <li><a href='a'>iCloud</a></li>
              <li><a href='a'>Apple One</a></li>
              <li><a href='a'>Apple Pay</a></li>
              <li><a href='a'>Livros</a></li>
              <li><a href='a'>Apple Podcasts</a></li>
              <li><a href='a'>App Store</a></li>
            </ul>
          </div>
        </div>
        {/* #3 */}
        <div className={isThirdSectionOpen ? 'nav-section open' : 'nav-section'}>
          <h5 onClick={handleOpenThirdSection}>
            Sua conta
          </h5>
          <div className='links-container'>
            <ul>
              <li><a href='a'>Gerenciar seu ID Apple</a></li>
              <li><a href='a'>Conta da Apple Store</a></li>
              <li><a href='a'>iCloud.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* #4 */}
      <div className={isFourthSectionOpen ? 'nav-section open' : 'nav-section'}>
        <h5 onClick={handleOpenFourthSection}>
          Apple Store
        </h5>
        <div className='links-container'>
          <ul>
            <li><a href='a'>Encontre uma loja</a></li>
            <li><a href='a'>Genius Bar</a></li>
            <li><a href='a'>Today at Apple</a></li>
            <li><a href='a'>Apple Camp</a></li>
            <li><a href='a'>App Apple Store</a></li>
            <li><a href='a'>Financiamento</a></li>
            <li><a href='a'>Programa de Reciclagem da Apple</a></li>
            <li><a href='a'>Status do seu pedido</a></li>
            <li><a href='a'>Ajuda para comprar</a></li>
          </ul>
        </div>
      </div>
      <div>
        {/* #5 */}
        <div className={isFifthSectionOpen ? 'nav-section open' : 'nav-section'}>
          <h5 onClick={handleOpenFifthSection}>
            Para Empresas
          </h5>
          <div className='links-container'>
            <ul>
              <li><a href='a'>Apple e os negócios</a></li>
              <li><a href='a'>Comprar para a sua empresa</a></li>
            </ul>
          </div>
        </div>
        {/* #6 */}
        <div className={isSixthSectionOpen ? 'nav-section open' : 'nav-section'}>
          <h5 onClick={handleOpenSixthSection}>
            Para a Educação
          </h5>
          <div className='links-container'>
            <ul>
              <li><a href='a'>Apple e a Educação</a></li>
              <li><a href='a'>Comprar para Educação Básica</a></li>
              <li><a href='a'>Comprar poara a faculdade</a></li>
            </ul>
          </div>
        </div>
        {/* #7 */}
        <div className={isSeventhSectionOpen ? 'nav-section open' : 'nav-section'}>
          <h5 onClick={handleOpenSeventhSection}>
            Para a Saúde
          </h5>
          <div className='links-container'>
            <ul>
              <li><a href='a'>Apple e a Saúde</a></li>
              <li><a href='a'>Saúde no Apple Watch</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        {/* #8 */}
        <div className={isEighthSectionOpen ? 'nav-section open' : 'nav-section'}>
          <h5 onClick={handleOpenEighthSection}>
            Valores da Apple
          </h5>
          <div className='links-container'>
            <ul>
              <li><a href='a'>Acessibilidade</a></li>
              <li><a href='a'>Meio ambiente</a></li>
              <li><a href='a'>Privacidade</a></li>
              <li><a href='a'>Responsabilidade dos fornecedores</a></li>
            </ul>
          </div>
        </div>
        {/* #9 */}
        <div className={isNinthSectionOpen ? 'nav-section open' : 'nav-section'}>
          <h5 onClick={handleOpenNinthSection}>
            Sobre a Apple
          </h5>
          <div className='links-container'>
            <ul>
              <li><a href='a'>Newsroom</a></li>
              <li><a href='a'>Liderança da Apple</a></li>
              <li><a href='a'>Oportunidades de Carreira</a></li>
              <li><a href='a'>Investidores</a></li>
              <li><a href='a'>Ética e Compliance</a></li>
              <li><a href='a'>Eventos</a></li>
              <li><a href='a'>Contato</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}