import { useState } from "react";
import EventCard from "../components/EventCard";

function Events(){
    const [events] = useState([
        { title: "Community Prayer", date: "2025-03-15", category: "Religious" },
        { title: "Charity Drive", date: "2025-04-10", category: "Charity" },
        { title: "Social Gathering", date: "2025-05-05", category: "Social" },
      ]);
    const [filter, setFilter] = useState("");
    const filteredEvents = filter ? events.filter(event => event.category === filter) : events;

return (
  <div>
    <select onChange={(e) => setFilter(e.target.value)} className="border p-2 m-2">
      <option value="">All Categories</option>
      <option value="Religious">Religious</option>
      <option value="Social">Social</option>
      <option value="Charity">Charity</option>
    </select>
    {/* Display filtered events */}
    <div className="mt-6">
        {filteredEvents.length === 0 ? (
          <p>No events available.</p>
        ) : (
          filteredEvents.map((event, index) => <EventCard key={index} event={event} />)
        )}
      </div>
  </div>
);
}


export default Events;