import { useState } from "react";

const EventForm = ({ onAddEvent }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEvent({ title, date, category });
    setTitle("");
    setDate("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input className="border p-2 m-2" type="text" placeholder="Event Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input className="border p-2 m-2" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <select className="border p-2 m-2" value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value="">Select Category</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Add Event</button>
    </form>
  );
};

export default EventForm;
