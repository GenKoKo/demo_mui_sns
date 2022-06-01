import { useState } from "react";
import { Feed } from "./components/Feed";
import { Leftbar } from "./components/Leftbar";
import { Rightbar } from "./components/Rightbar";
import {
  Box,
  Container,
  createTheme,
  Stack,
  ThemeProvider,
} from "@mui/material";
import { Navbar } from "./components/Navbar";
import { Add } from "./components/Add";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Leftbar setMode={setMode} mode={mode}/>
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
