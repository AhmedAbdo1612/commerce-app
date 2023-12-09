import React from 'react'
import EventCard from '../EventCard/EventCard';
export default function Events() {
  return (
    <div className="">
    <div className="w-[90%] mx-auto">
      <div className="text-[27px] text-center md:text-start font-[600] font-Roboto pb-[20px]">
       <h1> Popular Events</h1>
      </div>
      <div className="w-full grid">
        <EventCard/>
      </div>
    </div>
  </div>
  )
}
