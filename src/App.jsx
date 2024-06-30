import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [countDown, setCountDown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });



  let targetDate = new Date("2025-01-01T00:00:00");

  function count() {
    let difference = targetDate - new Date();
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    setCountDown({ days, hours, minutes, seconds });

    setTimeout(() => {
      count();
    }, 1000);
  }

  useEffect(() => {
    count();
  }, []);

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col items-end gap-y-5'>
        <div className='text-5xl font-bold'>{countDown.days} Days {countDown.hours} Hours {countDown.minutes} Minutes {countDown.seconds} Seconds</div>
        <div className='text-4xl font-bold'>Until 2025</div>
      </div>
    </div>
  )
}

export default App
