const EventCard = ({ event }) => {
    return (
      <div className="border p-4 my-2">
        <h3 className="text-xl font-bold">{event.title}</h3>
        <p>{event.date}</p>
        <p className="italic">{event.category}</p>
      </div>
    );
  };
  
  export default EventCard;
  