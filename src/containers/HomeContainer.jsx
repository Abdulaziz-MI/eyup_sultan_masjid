import Hero from "../components/Hero";
import './HomeContainer.css';
import mosque from "../assets/mosque.jpeg"

function Home() {

    const DAYLIGHT_SAVINGS_START = new Date('Sun March 26 2023 02:00:00 GMT+0100 (British Summer Time)');
    const DAYLIGHT_SAVINGS_END = new Date('Sun October 29 2023 01:00:00 GMT+0100 (British Summer Time)');



    return (

        <div className="home-container">
            <Hero
                cName="hero-full"
                img={mosque}
                title="Welcome to Eyup Sultan Masjid"
                text="Hi"
                buttonText="Find out more"
                buttonClass="show"
                url="/"
                timetable={true} />
        </div>
    )
}

export default Home;