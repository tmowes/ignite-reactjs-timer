import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logoImg from '../../assets/logo.svg'
import * as S from './styles'

export function Header() {
  return (
    <S.Container>
      <S.Logo src={logoImg} />
      <S.Menu>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </S.Menu>
    </S.Container>
  )
}
