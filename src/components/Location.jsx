import sister_section from '../assets/sister_section.jpg'
import outside from '../assets/outside.jpeg'
import map from '../assets/map.jpeg'
import mobile_map from '../assets/mobile_map.png'
import './Location.css'

function Location() {

      
    return (

        <section className="location-section" id="location" >

            <h2>Location</h2>
            <p>The Masjid's address is <a className='accent' href="https://www.google.com/maps/place/Eyup+Sultan+Mosque+%2F+Masjid/@51.5470637,-0.4823049,16z/data=!4m6!3m5!1s0x48766e7a5245a129:0x9ad8ae1e0b2bfce5!8m2!3d51.5477945!4d-0.4803284!16s%2Fg%2F11cly_27cd?entry=ttu" target="_blank"> 12 Redford Way Uxbridge, UB8 1SZ</a> .</p>


            <div className="location-container">

                <img src={mobile_map} alt="Map"/>
                <p>
                From the high street, The masjid is located opposite Tesco's through the alley way on the right. the images below will show the building and entrances.
                </p>

            </div>

            <div className="location-container">
            
                <img className='order2' src={outside} alt="Map" style={{ cursor: "pointer" }}/>
                <p>
                This is the main entrance of the masjid, This is the men's prayer section, incase the doors are locked please <a className='accent' href="#contact">contact us</a>, and we apologise for any inconvenience.
                </p>

            </div>

            <div className="location-container">
                
                <img  src={sister_section} alt="Women's Section" />
                <p> 
                The women's side is through the door at the back of the masjid, as seen in the image. If that door is closed, you can enter from the men's entrance.
                </p>

            </div>





        </section >

    )
}

export default Location




