import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green } from '@mui/material/colors';

const appBarTheme = createTheme({
  palette: {
    primary: {
      main: green[50],
    },
    secondary: {
      main: green[600],
    },
  },
});

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={appBarTheme}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Courses
            </Typography>
            <Typography variant="body2" component="div" sx={{ mr: 3 }}>
              Harry Potter
            </Typography>
            <Button variant="contained" color="secondary">
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}

export default Header;
