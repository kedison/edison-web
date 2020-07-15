import styled from "styled-components";
import { theme } from "../Theme";

export const ThemeBtn = styled.button`
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    outline: none;
    padding-right: 0;
`
export const ThemeCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ToggleTxt = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.smallFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    :hover {
        color: ${({ theme }) => theme.hoverTxtColor};
    }

    @media (min-width: ${theme.tabletSize}) {
        display: none;
    }
`