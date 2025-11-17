import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { AboutMe } from './layout/sections/aboutMe/AboutMe';
//import GeneralImage from './assets/images/photo.webp';
import GeneralImage from './assets/images/MainPhoto.png';
import { Quote } from './layout/sections/quote/Quote';
import { AwardsAndRecognition } from './layout/sections/awardsAndRecognition/AwardsAndRecognition';
import { LatestNews } from './layout/sections/latestNews/LatestNews';
import { Testimonials } from './layout/sections/testimonials/Testimonials';
import { Theme } from './styles/Theme';
import { Main } from './layout/main/Main';
import { Footer } from './layout/footer/Footer';
import { LastWorks } from './layout/sections/lastWorks/LastWorks';
import { Modal } from './components/modal/Modal';
import { channel } from 'diagnostics_channel';


function App() {
    return (
        <div className="App">
            <General id="home">
                <Header/>
                <Main/>
            </General>
            <AboutMe/>
            <LastWorks/>
            <Quote/>
            <Footer/>
        </div>
    );
}

export default App;

const General = styled.div`
    height: 100vh;
    max-width: 100%;
    margin-bottom: 11rem;
    background-image: url(${GeneralImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

     @media ${Theme.media.mdScreen}{
        background-position-x: 70%;
    }

        @media ${Theme.media.screen}{
        background-position-x: 80%;
    }
    
    @media ${Theme.media.tablet}{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`