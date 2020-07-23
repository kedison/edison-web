import styled from "styled-components";
import { theme } from "../Theme";

export const CaseStudyCont = styled.div`
    margin: 0 0 5rem;
`

///////////// Banner

export const BannerCont = styled.div`
    object-fit: cover;
    height: 400px;

    @media (min-width: ${theme.tabletSize}) {
        height: 700px;
    }
`
export const BannerImg = styled.img`
    height: 100%;
    width: 100%;
    filter: brightness(${({ theme }) => theme.imgBrightness});
`

///////////// Stats

export const StatsMainCont = styled.div`
    margin: 4rem auto 8rem;
`

export const ProjectTitle = styled.h1`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h2FontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    font-weight: 500;
`

////////////////// Stats SubCont

export const StatsSubCont = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;

    @media (min-width: ${theme.desktopSize}) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`
export const TypeCont = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.75rem 0;
    
    @media (min-width: ${theme.desktopSize}) {
        margin: 2rem 6rem 2rem 0;
    }
`
export const Category = styled.h1`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    font-weight: 500;
    margin: 0.5rem 0;
`
export const DataTxt = styled.h1`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
`
export const PresLink = styled.a`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
`

////////////////// Image

export const ProjectImgCont = styled.div`
    margin: 1rem 0;
    height: 350px;

    @media (min-width: ${theme.tabletSize}) {
        height: auto;
    }
    @media (min-width: ${theme.desktopSize}) {
        border-radius: 25px;
        width: 1000px;
        
    }
`
export const Image = styled.img`
    height: 100%;
    width: 100%;
    filter: brightness(${({ theme }) => theme.imgBrightness});

    @media (min-width: ${theme.desktopSize}) {
        border-radius: 25px;
    }
`

////////////////// Description

export const DescriptionCont = styled.div`
    margin: 4rem 0;
`
export const DescTxt = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    line-height: 26px;

    width: 325px;
    margin: 0 auto;

    @media (min-width: ${theme.skinnyWindowSize}) {
      width: 400px;
    }
    @media (min-width: ${theme.tabletSize}) {
      width: 650px;
    }
    @media (min-width: ${theme.desktopSize}) {
      width: 1000px;
    }
`