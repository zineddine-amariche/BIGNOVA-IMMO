// color design tokens export


// #5e172b , le gris: #545454


// #894FFD, #E793FF, #BB02D3

 
 
export const tokensDark = {
  grey: {
    0: "#ffffff",
    10: "#f6f6f6",
    50: "#f0f0f0",
    100: "#dddddd",
    200: "#bbbbbb",
    300: "#989898",
    400: "#767676",
    500: "#545454",
    600: "#434343",
    700: "#323232",
    800: "#222222",
    900: "#111111",
    1000: "#000000",
  },
  primary: {
    // blue
    100: "#dfd1d5",
    200: "#bfa2aa",
    300: "#9e7480",
    400: "#7e4555",
    500: "#5e172b",
    600: "#4b1222",
    700: "#380e1a",
    800: "#260911",
    900: "#130509"
  },
  secondary: {
    // teal
    100: "#e7dcff",
    200: "#d0b9fe",
    300: "#b895fe",
    400: "#a172fd",
    500: "#894ffd",
    600: "#6e3fca",
    700: "#522f98",
    800: "#372065",
    900: "#1b1033"
  },
  thirdly: {
    100: "#f1ccf6",
          200: "#e49aed",
          300: "#d667e5",
          400: "#c935dc",
          500: "#bb02d3",
          600: "#9602a9",
          700: "#70017f",
          800: "#4b0154",
          900: "#25002a"
  },
};

 
function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            // palette values for dark mode
            primary: {
              ...tokensDark.primary,
              ...tokensDark.grey,
              main: tokensDark.primary[500],
              light: tokensDark.grey[0],
              dark: tokensDark.primary[700],
              contrastText: tokensDark.grey[300],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[500],
              light: tokensDark.grey[100],
              dark: tokensDark.grey[100],
              contrastText: tokensDark.grey[100],
            },
            neutral: {
              ...tokensDark.grey,
              ...tokensDark.thirdly,
              main: tokensDark.thirdly[900],
              dark: tokensDark.grey[0],
            },
            background: {
              default: tokensDark.secondary[800],
              alt: tokensDark.primary[900],
            },
          }
        : {
            primary: {
              ...tokensLight.primary,
              ...tokensLight.grey,
              main: tokensDark.grey[50],
              light: tokensDark.primary[500],
              dark: tokensDark.grey[0],
              contrastText: tokensDark.grey[900],
            },
            secondary: {
              ...tokensLight.secondary,
              ...tokensLight.grey,
              main: tokensDark.secondary[600],
              light: tokensDark.secondary[700],
              dark: tokensDark.grey[0],
              contrastText: tokensDark.grey[100],
            },
            neutral: {
              ...tokensLight.grey,
              main: tokensDark.grey[0],
              dark: tokensDark.thirdly[400],
            },
            background: {
              default: tokensDark.grey[50],
              alt: tokensDark.grey[50],
            },
          }),
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
