import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style";

import logoImg from '../../assets/logotipo.svg'

export function Header(){
  return(
    <HeaderContainer>
      <HeaderContent>
      <img src={logoImg} alt="" />

        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )

}