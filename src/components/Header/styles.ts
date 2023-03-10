import styled from 'styled-components'

interface BackgroundProps{
  activeBg:boolean
}
export const HeaderContainer = styled.div<BackgroundProps>`
  display:flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props)=> props.activeBg? '#0d0d0d' :'trasparent'};
  height: 12.5rem;

`
