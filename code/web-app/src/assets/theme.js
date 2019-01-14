import { css } from 'styled-components';


const sizes = {
  large_up: 1800,
  desktop_up: 1200,
  tablet_landscape_up: 900,
  tablet_portrait_up: 600,
  phone_only: 599,
};

const colors = {
  theme: '#D50001',
  darkTheme: '#5b470c',
  tealTheme: '#00889B',
  pinkTheme: '#E80C7A',
  lightAccent: '#F69C20',
  darkAccent: '#463217',
  blackTheme: '#080607',
  whiteTheme: '#F0FFFF',
  darkGray: '#1d1e22',
  yellowGray: '#d7d5cd',
  darkBlue: '#051b3e',
  warning: '#F66020',
};

const fontSizes = {
  heading: {
    size: '40px',
    lineHeight: '50px',
    weight: 400,
    margin: '0.67em 0',
  },
  subHeading: {
    size: '22px',
    lineHeight: '33px',
    fontWeight: 600,
    letterSpacing: '.025em',

  },
  medium: {
    size: '19px',
    lineHeight: '28px',
    weight: 500,
  },
  text: {
    size: '17px',
    lineHeight: '28px',
    weight: 400,

  },
};

const fontStyles = {
  heading: css`
  font-size: 42px;
  line-height: 1.1;
  font-weight: 800;
  font-family: 'TT Pines';
  margin: 0.67em 0;
  letter-spacing: -.015em;
  padding-top: 2px;
  padding-bottom: 2px;
  `,
  subHeading: css`
  font-size: 24px;
  line-height: 33px;
  font-weight: 500;
  letter-spacing: .025em;
  font-family: 'TT Pines';
  `,
  large: css`
    font-size: 24px;
  line-height: 33px;
  font-weight: 500;
  letter-spacing: .025em;
  font-family: "Source Sans Pro";
  `,
  medium: css`
  font-size: 19px;
  line-height: 28px;
  font-weight: 500;
  line-height: 25px;
  font-family: "Source Sans Pro";
  `,
  text: css`
  font-size: 17px;
  line-height: 28px;
  font-weight: 400;
  font-family: "Source Sans Pro";
  `,
  smallHeading: css`
  font-size: 14px;
  line-height: 30px;
  font-weight: 500;
  letter-spacing: .025em;
  `,
  small: css`
  font-size: 15px;
  line-height: 30px;
  font-weight: 500;
  `,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  if (acc[label] !== 'phone_only') {
    acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  } else {
    acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  }
  return acc;
}, {});

const styledComponents = {
  heading: css`
  ${fontStyles.heading}
  margin: auto;
  color: ${colors.whiteTheme};
  `,
  subHeading: css`
    ${fontStyles.subHeading}
  margin: auto;
  color: ${colors.theme};
  `,
  smallHeading: css`
    ${fontStyles.smallHeading}
  margin: auto;
  color: ${colors.theme};
  text-transform: uppercase;
  `,
  text: css`
  ${fontStyles.text}
margin: auto;
color: ${colors.whiteTheme};
`,
  small: css`
  ${fontStyles.small}
margin: auto;
color: ${colors.whiteTheme};
`,

};

const material = {
  root: {
    color: '#F4EDDC',
    ...fontStyles.text,
  },

  indicator: {
    backgroundColor: colors.pinkTheme,
  },

  bottomNavRoot: {
    width: '100%',
    backgroundColor: colors.blackTheme,
  },
  bottomActionRoot: {
    color: colors.whiteTheme,

    minWidth: '35px',

  },
  bottomActionSelected: {
    color: `${colors.pinkTheme}!important`,

  },
  buttonRoot: {
    color: `${colors.lightAccent}!important`,
    ...fontStyles.text,

  },
  buttonColorPrimary: {
    color: colors.lightAccent,
  },
  swipeableBottomMenuRoot: {
    color: colors.blackTheme,
    backgroundColor: colors.whiteTheme,
    ...fontStyles.text,

    '@media(orientation: landscape)': {
      height: '100vh',
    },
  },
  swipeableSideMenuRoot: {
    color: colors.blackTheme,
    height: '100vh',
    backgroundColor: colors.whiteTheme,
    width: '320px',
  },
  swipeableMenuList: {
    height: '100%',
    backgroundColor: colors.whiteTheme,
  },
  avatarLarge: {
    width: 60,
    height: 60,
    margin: 10,
  },
};
const theme = {
  media,
  colors,
  fontSizes,
  fontStyles,
  components: styledComponents,
  materialUI: material,
};

export default theme;
