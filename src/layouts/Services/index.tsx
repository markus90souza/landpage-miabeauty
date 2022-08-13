import { ServiceCard } from './ServiceCard'
import {
  ServicesContainer,
  ServicesWrapper,
  ServicesCardContainer,
} from './styles'

import card1 from '@assets/images/card-01.png'
import card2 from '@assets/images/card-02.png'
import card3 from '@assets/images/card-03.png'

const services = [
  {
    id: 1,
    cover: card1,
    name: 'Cuidados com o cabelo',
    description:
      'Cortes especiais e lavagem com produtos e cuidados exclusivos',
  },
  {
    id: 2,
    cover: card2,
    name: 'Cuidados das unhas',
    description: 'Cuide da beleza das unhas das suas mãos e pés.',
  },
  {
    id: 3,
    cover: card3,
    name: 'Maquiagem',
    description:
      'Transforme sua autoestima com o trabalho de nossos maquiadores.',
  },
]

export function Services() {
  return (
    <ServicesContainer>
      <ServicesWrapper>
        <header>
          <h3>NOSSOS SERVIÇOS</h3>
          <h2>Veja o que fazemos de melhor</h2>
        </header>

        <ServicesCardContainer>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              cover={service.cover}
              name={service.name}
              description={service.description}
            />
          ))}
        </ServicesCardContainer>
      </ServicesWrapper>
    </ServicesContainer>
  )
}
