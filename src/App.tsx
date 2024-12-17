import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { AboutMe } from './layout/sections/aboutMe/AboutMe';
import GeneralImage from './assets/images/photo.webp';
import { LastWorks } from './layout/sections/main/lastWorks/LastWorks';
import { Quote } from './layout/sections/quote/Quote';
import { AwardsAndRecognition } from './layout/sections/awardsAndRecognition/AwardsAndRecognition';
import { LatestNews } from './layout/sections/latestNews/LatestNews';
import { Testimonials } from './layout/sections/testimonials/Testimonials';
import { Footer } from './layout/sections/footer/Footer';


function App() {
    return (
        <div className="App">
            <General>
                <Header/>
                <Main/>
            </General>
            <AboutMe/>
            <LastWorks/>
            <Quote/>
            <AwardsAndRecognition/>
            <LatestNews/>
            <Testimonials/>
            <Footer/>
        </div>
    );
}

export default App;

const General = styled.div`
    height: 100vh;
    width: 100vw;
    margin-bottom: 178px;
    background-image: url(${GeneralImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`