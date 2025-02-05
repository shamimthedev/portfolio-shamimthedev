import About from "../components/About"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import SelectedProjects from "../components/SelectedProject"
import Specialization from "../components/Specialization"


const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Specialization />
            <SelectedProjects/>
            <Projects />
            <Footer />
        </>
    )
}

export default Home