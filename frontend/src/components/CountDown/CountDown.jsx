import React, { useEffect, useState } from 'react'

export default function CountDown() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setTimeLeft(calculateTimeLeft())
        },1000)
        return  ()=>clearTimeout(timer)
    },)
   function calculateTimeLeft() {
    const difference = +new Date("2024-05-1") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }
    const timerComponents = Object.keys(timeLeft).map((interval,index)=>{
        if(!timeLeft[interval]){
            return null
        }
        return (<span className='text-[25px] text-blue-700' key={index}>
        {timeLeft[interval]} {interval} {" "}
       </span> )})
  return (
<div className="">
    {timerComponents.length?timerComponents:<span className='text-[red] text-[25px]'> Time's Up!</span>}
</div>
  )
}
