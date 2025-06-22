import Banner from "./Banner";
import Services from "./Services";
import About from "./About";
import FAQS from "./Faq";
import Contact from "./Contact";

export default function Home() {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <FAQS></FAQS>
            <Contact></Contact>
        </div>
    )
}
