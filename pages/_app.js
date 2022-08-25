import { createTheme, ThemeProvider } from "@mui/material";
import { createContext, useState } from "react";
// import theme from "../src/theme";
import "../styles/globals.css";

// Context API
export const ThemeContext = createContext("");

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <ThemeContext.Provider value={[mode, setMode]}>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
