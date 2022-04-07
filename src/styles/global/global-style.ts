import { createGlobalStyle } from "styled-components";
import theme from "../theme/theme.json";
import device from "media-query-sizes";

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    font-family: ${theme.fonts.primary}, ${theme.fonts.neutral};
    list-style: none;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
  }

  html {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
  }

  body {
    background-color: ${theme.colors.ebony};
  }

  @media ${device.laptopL} {
    .card-container {
      flex-direction: column;

      .workspace {
        border-radius: 10px 10px 0 0;
        width: 100%;
      }

      .main-area {
        border-radius: 0 0 10px 10px;
        max-width: 532px;
        padding: 40px;
        text-align: center;

        .description-container {
          max-width: none;

          .description {
            margin-bottom: 25px;
          }
        }

        .data-container {
          justify-content: space-around;

          .info-container {
            margin: 0;
          }
        }
      }
    }
  }

  @media ${device.tablet} {
    .data-container {
      flex-direction: column;

      .info-container {
        padding-bottom: 15px;
      }
    }
  }
`;

export default GlobalStyle;
