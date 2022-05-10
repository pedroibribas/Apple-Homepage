import { NavFooter } from './NavFooter';
import './styles.css';

export function Footer() {
  return (
    <footer className='footer-container'>
      <div className='footer-content'>
        <div className='footnotes'>
          <p>
            1. É preciso ter um Apple Watch. Somente para novos assinantes. R$ 29,90 por mês após o período de teste. A assinatura é renovada automaticamente até que seja cancelada.
          </p>
          <p>
            É preciso ter uma assinatura do Apple Fitness+.
          </p>
          <p>
            O Apple Fitness+ requer iOS 14.3 ou posterior, iPadOS 14.3 ou posterior, watchOS 7.2 ou posterior e tvOS 14.3 ou posterior.
          </p>
          <p>
            Para ter acesso aos recursos mais novos, seus aparelhos precisam ter a versão mais recente do software.
          </p>
          <p>
            O Apple TV+ custa R$ 9,90 por mês após o período de teste gratuito. Uma assinatura por grupo de Compartilhamento Familiar. Oferta válida por três meses a partir da data de ativação do aparelho qualificado. A assinatura é renovada automaticamente até que seja cancelada. Aplicam-se outros termos e restrições.
          </p>
        </div>

        <NavFooter />

        <p className='stores-info'>
          Outras formas de comprar: <a href='#'>encontre uma Apple Store</a> ou <a href='#'>revendedor Apple</a> na sua região. Ou ligue para 0800-761-0867. Rua Leopoldo Couto de Magalhães Jr., 700, 7º andar, Itaim Bibi. São Paulo, SP. CEP: 04542-000. 
          <br />
          Os Serviços de Mídia da Apple são fornecidos pela Apple Services LATAM LLC.
        </p>

        <div className='flexbox'>
          <a href='#'>Brasil</a>
          <p>
            Copyright © 2022 Apple Inc. Todos os direitos reservados. Apple Computer Brasil Ltda. CNPJ: 00.623.904/0003-35
          </p>
        </div>

        <ul className='legal-links'>
          <li>
            <a className='link-dark' href='#'>Política de Privacidade</a>
          </li>
          <li>
            <a className='link-dark' href='#'>Política de vendas</a>
          </li>
          <li>
            <a className='link-dark' href='#'>Avisos legais</a>
          </li>
          <li>
            <a className='link-dark' href='#'>Mapa do site</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}