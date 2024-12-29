import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: "#e91e63"
        },
        secondary: {
            main: "#5A20CB"
        },
        black: {
            main: "#0D0D0D"
        },
        background: {
            main: "#000000",  // Note: fixed the extra 0
            default: "#0D0D0D",
            paper: "#0D0D0D"
        },
        textColor: {
            main: "#111111"
        }
    },
});