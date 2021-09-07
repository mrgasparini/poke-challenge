import { Poke } from 'pages'
import * as S from './styles'
import SearchAbilities from 'components/SearchAbilities/searchAbilities'

const Main = () => (
  <S.Wrapper>
    <S.Container>
      <S.Title>Poke Abilities</S.Title>
      <SearchAbilities />
    </S.Container>
  </S.Wrapper>
)

export default Main
