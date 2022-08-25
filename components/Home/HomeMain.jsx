// import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { Box, Stack } from "@mui/material";
// import { useContext } from "react";
// import { ThemeContext } from "../../pages/_app";
import Add from "./Sections/Add";
import Navbar from "./Sections/Navbar";
import NewsFeed from "./Sections/NewsFeed";
import Rightbar from "./Sections/Rightbar";
import Sidebar from "./Sections/Sidebar";
// import { useState } from "react";

// const HomeMain = ({ mode, setMode }) => {
const HomeMain = () => {
  // const [mode, setMode] = useState("light");

  // const darkTheme = createTheme({
  //   palette: {
  //     mode: mode,
  //   },
  // });
  // using Context API
  // const [mode, setMode] = useContext(ThemeContext);
  return (
    // <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      {/* <Stack direction="row" spacing={2} justifyContent="space-between"> */}
      <Stack direction="row" justifyContent="space-between">
        {/* <Sidebar setMode={setMode} mode={mode} /> */}
        <Sidebar />
        <NewsFeed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
    // </ThemeProvider>
  );
};

export default HomeMain;
