import styled from "styled-components";
import { theme } from "../Theme";

export const HeaderCont = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    margin: 2.5rem auto;
`
export const NavCont = styled.div`
    display: flex;
`
export const LogoText = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h3FontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    text-transform: uppercase;
    letter-spacing: 0.15rem;
`
export const NavTxt = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h3FontSize};
    color: ${({ theme }) => theme.accentTxtColor};
    text-transform: uppercase;
    margin: 0 1.5rem;
    :hover {
        color: ${({ theme }) => theme.mainTxtColor};
    }
`
export const linkStyle = {
    textDecoration: 'none'
}