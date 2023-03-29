import './App.css';
import { useState, useEffect } from 'react';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import FootNavbar from './components/footnavbar/footnavbar';
import ComingSoon from './components/comingsoon/comingsoon';
import Home from './pages/HomePage/home';
import SeasonsPage from './pages/SeasonsPage/seasonspage.js';
import RoadToAPL from './pages/RoadToAPL/roadtoaplpage.js';
import SlotBookingPage from './pages/SlotBookingPage/slotbookingpage.js';
import RegistrationPage from './pages/RegistrationPage/registration.js';
import PlayerRegistrationPage from './pages/PlayerRegistrationPage/playerregistrationpage.js';
import TeamRegistrationPage from './pages/TeamRegistrationPage/teamregistrationpage.js';
import TeamPage from './pages/TeamPage/team';
import EventsPage from './pages/EventsPage/eventspage';
import APL6LandingPage from './pages/APL6Page/apl6landingpage';
import APL6PlayersPage from './pages/APL6Page/apl6playerspage';
import APL6TeamPage from './pages/APL6Page/apl6teamspage';
import APL6DetailsPage from './pages/APL6Page/apl6detailspage';
import APL6AwardsPage from './pages/APL6Page/apl6awardspage';
import APL6GalleryPage from './pages/APL6Page/apl6gallerypage';
import APL5LandingPage from './pages/APL5Page/apl5landingpage';
import APL5PlayersPage from './pages/APL5Page/apl5playerspage';
import APL5TeamPage from './pages/APL5Page/apl5teamspage';
import APL5DetailsPage from './pages/APL5Page/apl5detailspage';
import APL5AwardsPage from './pages/APL5Page/apl5awardspage';
import APL5GalleryPage from './pages/APL5Page/apl5gallerypage';
import FifaRegistrationPage from './pages/FifaRegistrationPage/fifaregistrationpage';
import TeamRegClosed from './components/teamregistrationclosed/teamregclosed';
import RegFailed from './components/registration/regfail';

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
                <Route exact path="/comingsoon" element={<ComingSoon/>} />

                <Route exact path="/" element={<Home/>} />

                <Route exact path="/seasons" element={<SeasonsPage/>} />

                {/* APL 5 */}
                <Route exact path="/seasons/apl5" element={<APL5LandingPage/>} /> 
                <Route exact path="/seasons/apl5/players" element={<APL5PlayersPage/>} />
                <Route exact path="/seasons/apl5/teams" element={<APL5TeamPage/>} />
                <Route exact path="/seasons/apl5/details" element={<APL5DetailsPage/>} />
                <Route exact path="/seasons/apl5/awards" element={<APL5AwardsPage/>} />
                <Route exact path="/seasons/apl5/gallery" element={<APL5GalleryPage/>} />
                
                {/* APL 6 */}
                {/* <Route exact path="/seasons/apl6" element={<APL6LandingPage/>} /> */}
                <Route exact path="/seasons/apl6" element={<APL6LandingPage/>} />
                <Route exact path="/seasons/apl6/players" element={<APL6PlayersPage/>} />
                <Route exact path="/seasons/apl6/teams" element={<APL6TeamPage/>} />
                <Route exact path="/seasons/apl6/details" element={<APL6DetailsPage/>} />
                <Route exact path="/seasons/apl6/awards" element={<APL6AwardsPage/>} />
                <Route exact path="/seasons/apl6/gallery" element={<APL6GalleryPage/>} />

                <Route exact path="/roadtoapl" element={<RoadToAPL/>} />
                <Route exact path="/slots" element={<SlotBookingPage/>} />

                {/* Registration */}
                <Route exact path="/registration" element={<RegistrationPage/>} />
                <Route exact path="/registration/player" element={<PlayerRegistrationPage/>} />
                <Route exact path="/registration/team" element={<RegFailed/>} />
                <Route exact path="/registration/fifa" element={<FifaRegistrationPage/>} />
                <Route exact path="/registration/registrationfailed" element={<RegFailed/>} />

                {/* Meet The Team */}
                <Route exact path='/team' element={<TeamPage/>} />

                {/* Mini Events */}
                <Route exact path='/events' element={<EventsPage/>} />
              </Routes>
            </Router>
          </div>
          <FootNavbar/>
          <Footer/>
        
      </NextUIProvider>
    )
  }

export default App;
