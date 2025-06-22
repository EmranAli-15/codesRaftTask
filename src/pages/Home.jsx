import Banner from "../components/Banner";
import Services from "../components/Services";
import About from "../components/About";
import FAQS from "../components/Faq";
import Contact from "../components/Contact";
import Location from "../components/Location";

export default function Home() {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <FAQS></FAQS>
            <Contact></Contact>
            <Location></Location>
        </div>
    )
}
