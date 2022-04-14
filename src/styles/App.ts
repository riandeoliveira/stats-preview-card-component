import styled from "styled-components";
import theme from "./theme/theme.json";
import device from "media-query-sizes";

export const AppBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 20px;

  header {
    max-height: 437px;
    max-width: 532px;

    img {
      border-radius: 0 10px 10px 0;
    }
  }

  main {
    background-color: ${theme.colors.port_gore};
    border-radius: 10px 0 0 10px;
    padding: 68px 100px 68px 68px;
    width: 100%;
  }

  @media ${device.laptopL} {
    flex-direction: column;

    header {
      img {
        border-radius: 10px 10px 0 0;
        width: 100%;
      }
    }

    main {
      border-radius: 0 0 10px 10px;
      max-width: 532px;
      padding: 40px;
      text-align: center;
    }
  }
`;

export const DescriptionBox = styled.div`
  animation: fade-in 1s;
  max-width: 400px;

  h1 {
    color: ${theme.colors.white};
    font-size: 34px;
    margin-bottom: 25px;

    span {
      color: ${theme.colors.medium_purple};
      margin: 0 7px;
    }
  }

  p {
    color: ${theme.colors.santas_gray};
    font-size: 14px;
    line-height: 1.7em;
    margin-bottom: 70px;
  }

  @media ${device.laptopL} {
    max-width: none;

    p {
      margin-bottom: 25px;
    }
  }
`;

export const DataBox = styled.div`
  animation: fade-in 1s;
  display: flex;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column-reverse;
    margin-right: 60px;

    h2 {
      color: ${theme.colors.santas_gray};
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    h3 {
      color: ${theme.colors.white};
      font-size: 24px;
      margin-bottom: 6px;
    }
  }

  @media ${device.laptopL} {
    justify-content: space-around;

    div {
      margin: 0;
    }
  }

  @media ${device.tablet} {
    flex-direction: column;

    div {
      padding-bottom: 15px;
    }
  }
`;
