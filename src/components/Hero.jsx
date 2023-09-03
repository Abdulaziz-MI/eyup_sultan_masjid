import { useMediaQuery } from 'react-responsive';
import './Hero.css'
import { useEffect, useState } from 'react';

// const DAYLIGHT_SAVINGS_START = new Date('Sun March 26 2023 02:00:00 GMT+0100 (British Summer Time)');
// const DAYLIGHT_SAVINGS_END = new Date('Sun October 29 2023 01:00:00 GMT+0100 (British Summer Time)');

function Hero(props) {

    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

    const [prayerTimes, setPrayerTimes] = useState({})
    const [adhanTimes, setAdhanTimes] = useState({})
    // const [iqamaTimes, setIqamaTimes] = useState({})

    // const [prayerTimesT, setPrayerTimesT] = useState({})


    useEffect(() => {
        async function fetchData() {
            try{
            // You can await here
            let url =
                "https://api.aladhan.com/v1/timingsByAddress/4gtrg?address=Uxbridge%2C+London%2C+UK&method=15";
            let response = await fetch(url);
            let json = await response.json();

            const date = json.data.date;
            const dates = {
                gregorian_date: `${date.gregorian.year}-${date.gregorian.month.number}-${date.gregorian.day}T`,
                // gregorian_year: date.gregorian.year,
                // gregorian_month: date.gregorian.month.number,
                // gregorian_day: date.gregorian.day,
                gregorian_readable: date.readable,
                hijri: `${date.hijri.day} ${date.hijri.month.en} ${date.hijri.year} `,
            };

            const adhan = {
                Fajr: json.data.timings.Fajr,
                Sunrise: json.data.timings.Sunrise,
                Dhur: json.data.timings.Dhuhr,
                Asr: json.data.timings.Asr,
                Maghrib: json.data.timings.Maghrib,
                Isha: json.data.timings.Isha,
                "1st Jummah": "13:30",
                "2nd Jummah": "14:30",
            };
        

    
            setAdhanTimes(adhan);
            console.log(adhan.Fajr)
        
          

            // const iqama = {
            //     Fajr: new Date(adhan.Fajr.getTime() + 2 * 60000).toLocaleTimeString(),
            //     Dhur: new Date(adhan.Dhur.getTime() + 2 * 60000).toLocaleTimeString(),
            //     Asr: new Date(adhan.Asr.getTime() + 3 * 60000).toLocaleTimeString(),
            //     Maghrib: new Date(adhan.Maghrib.getTime() + 4 * 60000).toLocaleTimeString(),
            //     Isha: new Date(adhan.Isha.getTime() + 5 * 60000).toLocaleTimeString(),
            // };
            // setIqamaTimes(iqama)

        } catch (error){
            console.error("Error fetching prayer times:", error);
        }
        }



        fetchData();
       


  
    }, []);


  // Horizontal table for large screens
const renderTimetableH = () => {
    return (
      <>
        <table className="timetable-container">
          <thead>
            <tr>
              <th>Prayer</th>
              <th>Fajr</th>
              <th>Sunrise</th>
              <th>Dhur</th>
              <th>Asr</th>
              <th>Magrib</th>
              <th>Isha</th>
              <th>1st Jummah</th>
              <th>2nd Jummah</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Adhan</th>
              {Object.keys(adhanTimes).map((prayer) => (
                <td key={prayer}>{adhanTimes[prayer]}</td>
              ))}
            </tr>
            {/* <tr> 
               <th>Iqama</th>
              {Object.keys(iqamaTimes).map((prayer) => (
                <td key={prayer}>{iqamaTimes[prayer]}</td>
              ))}
            </tr> */}
          </tbody>
        </table>
      </>
    );
  };
  
// Vertical table for small screens 
const renderTimetableV = () => {
    return (
      
      <table className="timetable-container">
        <thead>
          <tr>
            <th>Prayer</th>
            <th>Adhan</th>
            
          </tr>
        </thead>

        <tbody>
          {Object.keys(adhanTimes).map((adhan) => (
            <tr key={adhan}>
              <th>{adhan}</th>
            
              <td>{adhanTimes[adhan]}</td>
            </tr>
          ))}
        </tbody>

      </table>
    );
  }
  

    return (

        <div className={props.cName} style={{ backgroundImage: `url(${props.img})` }} id="home">
            <div className='content-container'>
                <div className="hero-full">
                    <h1 className='hero-title'>
                        {props.title}
                    </h1>
                    
                    {props.timetable && isMobile ? renderTimetableV() : renderTimetableH()}
                    
                </div>
            </div>

        </div>
    )
}

export default Hero;


