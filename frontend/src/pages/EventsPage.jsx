import React from 'react'
import Header from '../components/Header/Header'
import EventCard from '../components/EventCard/EventCard'

export default function EventsPage() {
  document.title = "Events"
  return (
    <div className='bg-gray-200'>
        <Header  activeHeading={4}/>
        <br />
        <EventCard active = {true}/>
        <br />
        <EventCard active = {true}/>
        <br />
    </div>
  )
}
