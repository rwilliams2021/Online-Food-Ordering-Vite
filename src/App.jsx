import './App.css';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './theme/DarkTheme';
import { CssBaseline } from '@mui/material';
import CustomerRoute from './Routers/CustomerRoute';
import { useEffect } from 'react';
import { getUser } from './component/State/Authentication/Action';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch=useDispatch()
  const jwt = localStorage.getItem("jwt")
  const {auth} = useSelector(store=>store)
  useEffect(() => {
    if (auth.jwt || jwt) {
      dispatch(getUser(auth.jwt || jwt)); // use auth.jwt if present, else use jwt from local storage
    }
  }, [auth.jwt, dispatch, jwt]);
  return (
    <ThemeProvider theme = {darkTheme}>
      <CssBaseline />
      {/* <Navbar/> */}
      {/* <Home/> */}
      {/* <RestaurantDetails/> */}
      {/* <Cart/> */}
      {/* <Profile/> */}
      <CustomerRoute/>
    </ThemeProvider>
  );
}

export default App;
