import { Footer } from '../layout/footer/Footer';
import { Header } from '../layout/header/Header';
import { Main } from '../layout/main/Main';
import { AboutMe } from '../layout/sections/aboutMe/AboutMe';
import { LastWorks } from '../layout/sections/lastWorks/LastWorks';
import { Quote } from '../layout/sections/quote/Quote';
import { Theme } from '../styles/Theme';
import styled from 'styled-components';
import GeneralImage from '../assets/images/MainPhoto.png'



export const Landing = () => {
    return (
        <div>
            <General>
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