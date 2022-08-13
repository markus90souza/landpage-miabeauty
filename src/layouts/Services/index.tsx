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
    name: 'Serviços veterinários',
    description:
      'Cuide da saúde do seu amigo com exames, vacinação e consultas.',
  },
  {
    id: 2,
    cover: card2,
    name: 'Banho e tosa',
    description: 'Deixe o seu pet bem limpinho com nossos produtos exclusivos.',
  },
  {
    id: 3,
    cover: card3,
    name: 'Hospedagem',
    description:
      'Vai viajar? Conte com a gente para cuidar do seu pet o tempo que precisar!',
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
