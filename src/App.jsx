import Nav from './components/nav/Nav';
import Terminal from './components/terminal/Terminal';
import Work from './components/work/Work';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ProgressBar from './components/progressBar/ProgressBar';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from 'react';
import ThemeContext from './context/ThemeContext';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

const App = () => {

    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <>
            <ThemeProvider theme={{ theme }}>
                <GlobalStyles />
                <ProgressBar />
                <Header />
                <Nav />
                <Terminal />
                <Work />
                <Projects />
                <Contact />
                <Footer />
            </ThemeProvider>
        </>
    )
}

export default App;