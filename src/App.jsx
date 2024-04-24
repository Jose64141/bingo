import * as React from 'react';
import { Box, Grid, Tab, Tabs } from '@mui/material';
import CurrentNumbersGrid from "./components/CurrentNumbersGrid";
import CurrentPlayGrid from "./components/CurrentPlayGrid";

export default function App() {
  const [value, setValue] = React.useState(0);
  const handleTabChange = (event, newValue) => {
      setValue(newValue);
  };

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
        <Grid container component="main"
            spacing={0}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <Box sx={{  bgcolor: 'background.paper', my: 3 }}>
                <Tabs value={value} onChange={handleTabChange}>
                    <Tab label="Bingo" />
                    <Tab label="Diagrama" />
                </Tabs>
            </Box>
        </Grid>
        <Box role="tabpanel" hidden={value !== 0}>
            <CurrentNumbersGrid />
        </Box>
        <Box role="tabpanel" hidden={value !== 1}>
            <CurrentPlayGrid />
        </Box>
    </Box>
    </>
  );
}
