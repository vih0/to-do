import Logo from '../../assets/Logo.svg'
import { HeaderContainer } from './styles'
interface HeaderProps {
    isActive: boolean
}
export function Header({ isActive }: HeaderProps) {

    return (
        <HeaderContainer activeBg={isActive}><img src={Logo} alt=""></img></HeaderContainer>
    )
}