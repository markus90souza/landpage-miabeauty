import { StaticImageData } from 'next/image'
import { Container, Cover, Info, Description, Title } from './styles'

interface ServiceCardProps {
  cover: StaticImageData
  name: string
  description: string
}

export function ServiceCard({ cover, name, description }: ServiceCardProps) {
  return (
    <Container>
      <Cover src={cover} />
      <Info>
        <Title>{name}</Title>
        <Description>{description}</Description>
      </Info>
    </Container>
  )
}
