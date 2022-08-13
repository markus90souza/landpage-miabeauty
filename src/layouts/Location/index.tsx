import 'leaflet/dist/leaflet.css'
import { MapPin } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { Container, LocationWrapper } from './styles'

export function Location() {
  const { colors } = useTheme()
  return (
    <Container>
      <LocationWrapper>
        <header>
          <h3>ONDE ESTAMOS</h3>
          <h2>Venha nos fazer uma visita!</h2>
          <span>
            <MapPin size={20} color={colors['pink-700']} />
            <address>Avenida 01 - 448 - São sebastião</address>
          </span>
        </header>
      </LocationWrapper>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d122783.82202502014!2d-47.81619737923156!3d-15.909362277093944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1660326382249!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Container>
  )
}
