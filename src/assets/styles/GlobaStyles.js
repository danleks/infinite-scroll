import MONTSERRAT_BOLD_WOFF from 'assets/fonts/montserrat-v18-latin-700.woff';
import MONTSERRAT_BOLD_WOFF2 from 'assets/fonts/montserrat-v18-latin-700.woff2';
import MONTSERRAT_REG_WOFF from 'assets/fonts/montserrat-v18-latin-regular.woff';
import MONTSERRAT_REG_WOFF2 from 'assets/fonts/montserrat-v18-latin-regular.woff2';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    /* montserrat-regular - latin */
    @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/montserrat-v18-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
        url(${MONTSERRAT_REG_WOFF2}) format('woff2'), /* Super Modern Browsers */
        url(${MONTSERRAT_REG_WOFF}) format('woff'), /* Modern Browsers */
    }

    /* montserrat-700 - latin */
    @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    src: url('../fonts/montserrat-v18-latin-700.eot'); /* IE9 Compat Modes */
    src: local(''),
        url(${MONTSERRAT_BOLD_WOFF2}) format('woff2'), /* Super Modern Browsers */
        url(${MONTSERRAT_BOLD_WOFF}) format('woff'), /* Modern Browsers */
    }

    html {
        box-sizing: border-box;
        font-size: 62.5% // from now 1rem === 10px
    }
    *, *:before, *:after {
        box-sizing: inherit;
        padding: 0;
        margin: 0;
    }
    body {
        font-size: 1.6rem;
        font-family: 'Montserrat', sans-serif;
    }
`;
