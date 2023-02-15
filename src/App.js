import './App.css';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Home from './pages/HomePage/home';
import Seasons from './pages/SeasonsPage/seasons.js';
import Schedule from './pages/SchedulePage/schedule.js';
import SlotBookingPage from './pages/SlotBookingPage/slotbookingpage.js';
import RegistrationPage from './pages/RegistrationPage/registration.js';
import PlayerRegistrationPage from './pages/PlayerRegistrationPage/playerregistrationpage.js';
import TeamRegistrationPage from './pages/TeamRegistrationPage/teamregistrationpage.js';


const theme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
    }
  }
})

function App() {
    return(
      <NextUIProvider theme={theme}>
        <Header/>
        <div className='container'>
          <Router>
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/seasons" element={<Seasons/>} />
              <Route exact path="/schedule" element={<Schedule/>} />
              <Route exact path="/slots" element={<SlotBookingPage/>} />
              <Route exact path="/registration" element={<RegistrationPage/>} />
              <Route exact path="/registration/player" element={<PlayerRegistrationPage/>} />
              <Route exact path="/registration/team" element={<TeamRegistrationPage/>} />
            </Routes>
          </Router>
        </div>
        <Footer/>
      </NextUIProvider>
    )
  }

export default App;
